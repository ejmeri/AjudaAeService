var express = require('express');
var router = express.Router();

var db = require('../models');



// new skill
router.post('/', async (req, res) => {

    const {name, area_id} = req.params;

    try {
        
        if(!name || !area_id)
            return res.status(400).send({error: 'Name skill or Area Id is null.', status: false});
        
        var skill = await db.Skill.create({name: name, area_id: area_id});
    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }


    res.send({skill: skill, status: true});
});

// new area
router.post('/area', async (req, res) => {
    const {name} = req.params;

    try {
        
        if(!name)
            return res.status(400).send({error: 'Name area is required.', status: false});


        var area = db.Area.create({name: name});
        
    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }

    res.send({area: area, status: true});
})

module.exports = app => app.use('/skill', router);