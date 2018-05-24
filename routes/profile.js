var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/', (req, res) => {
    res.send('Hello User, your profile.');
});

router.get('/:user_id', async (req, res) => {

    const {
        user_id
    } = req.params;

    try {
        var profile;

        if (user_id)
            profile = await db.Profile.findOne({ where: { user_id: user_id } });
        else
            return res.status(400).send({error: 'User id is required.',status: false});

        if (!profile)
            return res.status(400).send({
                error: 'Profile not found.',
                status: false
            });

    } catch (err) {
        res.status(400).send({
            error: err,
            status: false
        });
    }

    console.log(profile.photo.toString('Base64'));
    
    res.send({profile: profile ,status: true});

});

router.put('/:user_id', async (req, res) => {
    let profile = db.Profile;
    const {
        user_id
    } = req.params;
    profile = req.body;

    try {

        const Profile = await db.Profile.findOne({
            where: {
                user_id: user_id
            }
        });

        if (!profile.name)
            return res.status(400).send({
                error: 'Name is required',
                status: false
            });

        if (!profile.user_id)
            return res.status(400).send({
                error: 'User id is required',
                status: false
            });

        profile = await Profile.update({
            name: profile.name,
            birthday: profile.birthday,
            status: profile.status,
            user_id: user_id
        });

    } catch (err) {
        return res.status(400).send({
            error: err,
            status: false
        });
    }

    res.send({
        profile: profile,
        status: true,
        description: 'Profile updated.'
    });

});

router.post('/', async (req, res) => {
    let profile = db.Profile;
    profile = req.body;

    console.log(profile);
    try {

        const Profile = await db.Profile.findOne({ where: { user_id: profile.user_id } });

        if (Profile)
            return res.status(400).send({
                error: 'Profile already exists to this user id',
                status: false
            });

        if (!profile.name)
            return res.status(400).send({
                error: 'Name is required',
                status: false
            });

        if (!profile.user_id)
            return res.status(400).send({
                error: 'User id is required',
                status: false
            });


        profile = await db.Profile.create({
            name: profile.name,
            birthday: profile.birthday,
            status: profile.status,
            photo: profile.photo,
            user_id: profile.user_id
        });

    } catch (err) {
        return res.status(400).send({
            error: err,
            status: false
        });
    }

    res.send({
        profile: profile,
        description: 'Profile save',
        status: true
    });

});

router.post('/skillprofile', async (req, res) => {
    const {
        skill_id,
        profile_id,
        nivel
    } = req.body;

    try {


        var validar = await db.SkillProfile.findOne({where: {profile_id: profile_id, skill_id:skill_id}});

        if(validar)
            return res.status(400).send({error: 'Skill is already registred.', status : false});

        if (!nivel)
            return res.status(400).send({
                error: 'Nivel is required.',
                status: false
            });

        if (!skill_id)
            return res.status(400).send({
                error: 'SKill is required.',
                status: false
            });

        if (!profile_id)
            return res.status(400).send({
                error: 'Profile is required.',
                status: false
            });

        var skillprofile = await db.SkillProfile.create({
            profile_id: profile_id,
            skill_id: skill_id,
            nivel: nivel
        });

    } catch (err) {
        res.status(400).send({
            error: err,
            status: false
        });
    }

    res.send({
        skillprofile: skillprofile,
        status: true
    });

});

// new contact of a profile
router.post('/contact', async (req, res) => {
    let contact = db.Contact;
    contact = req.body;
    console.log(contact);
    try {

        if (!contact.number)
            return res.status(400).send({
                error: 'Number is required',
                status: false
            });

        if (!contact.profile_id)
            return res.status(400).send({
                error: 'Profile id is required',
                status: false
            });

        await db.Contact.create({
            number: contact.number,
            profile_id: contact.profile_id
        })

    } catch (err) {
        res.status(400).send({
            error: err,
            status: false
        });
    }

    res.send({
        contact: contact,
        status: true,
        description: 'Contact saved!'
    });
});

// get all questions of a profile user
router.get('/questions/:profile_id', async (req, res) => {
    const {
        profile_id
    } = req.params;

    try {

        var questions = await db.Question.findAll({
            where: {
                profile_id: profile_id
            }
        });

        if (!questions)
            questions = 'No results.';

    } catch (err) {
        return res.status(400).send({
            error: err,
            status: false
        });
    }

    res.send({
        questions: questions,
        status: true
    });
});

// get all answers of a profile user
router.get('/answers/:profile_id', async (req, res) => {
    const {
        profile_id
    } = req.params;

    try {
        var answers = await db.Answer.findAll({
            where: {
                profile_id: profile_id
            }
        });

        if (answers == 0)
            answers = 'No results.';

    } catch (err) {
        return res.status(400).send({
            error: err,
            status: false
        });
    }

    res.send({
        answers: answers,
        status: true
    });
});

// get all skill a profile user

router.get('/skills/:profile_id', async (req, res) => {
    const {
        profile_id
    } = req.params;

    try {
        var skills_profile = await db.Profile.findOne({
            include: {
                model: db.SkillProfile,
                attributes: ['id', 'skill_id', 'profile_id'],
                include: [{
                    model: db.Skill,
                    attributes: ['id','name']
                }]
            },
            where: {
                id: profile_id
            }
        })
    } catch (err) {
        return res.status(400).send({
            error: err,
            status: false
        });
    }

    res.send({skills_profile: skills_profile, status: true})
});

module.exports = app => app.use('/profile', router);

// http:8080/localhost/profile -> post