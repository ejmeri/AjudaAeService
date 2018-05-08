var express = require('express');

var router = express.Router();

var db = require('../models');

router.get('/', (req, res) => {
    res.send('Hello world');
});

router.post('/', async (req, res) => {

    const {name, private} = req.body;

    try {
        
        if(!name)
            return res.status(400).send({error: 'Name is required', status: false});

        var group = await db.Group.create({name: name, private: private});

    } catch (err) {
        res.status(400).send({error: err, status:false});
    }

    res.send({group: group, status: true});
});

router.post('/profilegroup', async (req, res) => {

    const {profile_id, group_id} = req.body;

    try {
        
        if(!profile_id)
            return res.status(400).send({error: 'Profile Id is required', status: false});

        if(!group_id)
            return res.status(400).send({error: 'Group Id is required', status: false});

        var profilegroup = await db.ProfileGroup.create({profile_id: profile_id, group_id: group_id});

    } catch (err) {
        res.status(400).send({error: err, status:false});
    }

    res.send({profilegroup: profilegroup, status: true});
});

router.post('/skillgroup', async (req, res) => {

    const {skill_id, group_id} = req.body;

    try {
        
        if(!skill_id)
            return res.status(400).send({error: 'Skill Id is required', status: false});

        if(!group_id)
            return res.status(400).send({error: 'Group Id is required', status: false});

        var skillgroup = await db.SkillGroup.create({skill_id: skill_id, group_id: group_id});

    } catch (err) {
        res.status(400).send({error: err, status:false});
    }

    res.send({skill_id: skill_id, status: true});
});


module.exports = app => app.use('/group', router);