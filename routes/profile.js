var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/', (req, res) => {
    res.send('Hello User, your profile.');
});

router.get('/:user_id', async (req, res) => {
    
    const {user_id} = req.params; 

    try {
        var profile;
        
        if(user_id)
            profile = await db.Profile.findOne({where: {user_id: user_id}});
        else
            return res.status(400).send({error: 'User id is required.', status: false});

        if(!profile)
            return res.status(400).send({error: 'Profile not found.', status: false});

    } catch (err) {
        res.status(400).send({error: err, status: false});        
    }

    res.send({profile: profile, status: true});

});

router.put('/:user_id', async (req, res) => {
    let profile = db.Profile;
    const {user_id} = req.params;
    profile = req.body;
 
    try {

        const Profile = await db.Profile.findOne({where:{user_id: user_id}});

        if(!profile.name)
            return res.status(400).send({error: 'Name is required', status: false});

        if(!profile.user_id)    
            return res.status(400).send({error: 'User id is required', status: false});

        profile = await Profile.update({name: profile.name, birthday: profile.birthday, status: profile.status, user_id: user_id});

    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }

    res.send({profile: profile, status:true,  description: 'Profile updated.'});

});

/**
 * @api {post} /profile
 * @apiGroup Profile
 * @apiSuccess {String} name Nome do perfil do usuário
 * @apiSuccess {String} birthday Data de nascimento do perfil (user).
 * @apiSuccess {Boolean} status Status do perfil.
 * @apiSuccess {Integer} user_id Id do usuário pertencente ao perfil.
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * {
        "profile": {
            "id": 1,
            "name": "Elmeri EJOTA",
            "birthday": '27/08/1997',
            "status": "1",
            "user_id": "2",
            "created_at": "2018-04-28T01:37:37.000Z",
            "updated_at": "2018-04-28T02:45:21.430Z"
        },
        "status": true,
        "description": "Profile save."
   }

 * @apiErrorExample {json} Error:
 *     HTTP/1.1 400 Forbidden
 *     {
 *       "error": "Message error",
 *        "status": false
 *     }

 */

router.post('/', async (req, res) => {
    let profile = db.Profile;
    profile = req.body;
 
    try {

        const Profile = await db.Profile.findOne({where:{user_id: profile.user_id}});

        if(Profile)
            return res.status(400).send({error: 'Profile already exists to this user id', status: false});

        if(!profile.name)
            return res.status(400).send({error: 'Name is required', status: false});

        if(!profile.user_id)    
            return res.status(400).send({error: 'User id is required', status: false});


        profile = await db.Profile.create({name: profile.name, birthday: profile.birthday, status: profile.status, user_id: profile.user_id});

    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }

    res.send({profile: profile, description: 'Profile save', status:true});

});

/**
 * @api {post} /skillprofile
 * @apiGroup Status
 * @apiSuccess {String} status Mensagem de status da TESTE
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * {"status": "AjudaAe API"}
 */

router.post('/skillprofile', async (req, res) => {
    const {skill_id, profile_id, nivel} = req.body;

    try {

        if(!nivel)
            return res.status(400).send({error: 'Nivel is required.', status: false});
        
        if(!skill_id)
            return res.status(400).send({error: 'SKill is required.', status: false});

        if(!profile_id)
            return res.status(400).send({error: 'Profile is required.', status: false});

        var skillprofile = await db.SkillProfile.create({profile_id: profile_id, skill_id: skill_id, nivel: nivel});

    } catch (err) {
        res.status(400).send({error: err, status: false});
    }

    res.send({skillprofile: skillprofile, status: true});

});

// new contact of a profile
router.post('/contact', async (req, res) => {
    let contact = db.Contact;
    contact = req.body;
    console.log(contact);
    try {

        if(!contact.number)
            return res.status(400).send({error:'Number is required', status: false});

        if(!contact.profile_id)
            return res.status(400).send({error:'Profile id is required', status: false});
        
        await db.Contact.create({number: contact.number, profile_id: contact.profile_id})

    } catch (err) {
        res.status(400).send({error:err, status: false});
    }

    res.send({contact:contact, status: true, description: 'Contact saved!'});
}); 

// get all questions of a profile user
router.get('/questions/:profile_id', async (req, res) => {
    const {profile_id} = req.params;

    try {

        var questions = await db.Question.findAll({where: {profile_id: profile_id}});

        if(!questions)
            questions = 'No results.';

    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }

    res.send({questions: questions, status: true});
});

// get all answers of a profile user
router.get('/answers/:profile_id', async (req, res) => {
    const {profile_id} = req.params;

    try {
        var answers = await db.Answers.findAll({where: {profile_id: profile_id}});

        if(!answers) 
            answers = 'No results.';

    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }

    res.send({answers: answers, status: true});
});

module.exports = app =>  app.use('/profile', router);

// http:8080/localhost/profile -> post