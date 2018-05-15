var express = require('express');
var router = express.Router();
var db = require('../models');

// new skill
router.post('/', async (req, res) => {
    const {name, area_id} = req.body;

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
    const {name} = req.body;

    try {
        if(!name)
            return res.status(400).send({error: 'Name area is required.', status: false});

        var area = await db.Area.create({name: name});
        
    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }

    res.send({area: area, status: true});
});

// get skills
router.get('/', async (req, res) => {
    try {
        var skill = await db.Skill.findAll();
    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }
    res.send({skills: skill, status: true});
});

// get areas
router.get('/area', async (req, res) => {
    try {
        var area = await db.Area.findAll();
    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }
    res.send({areas: area, status: true});
});

// update area
router.put('/area/:area_id', async (req, res) => {
	const {area_id} = req.params;
	const {name} = req.body;
	try {
		const Area = await db.Area.findOne({where: {id: area_id}});	
		var updatearea = await Area.update({name: name});
	} catch(err) {
		return res.status(400).send({error: err, status: false});
	}
	
	res.send({area: updatearea, status: true});
});

// update skill
router.put('/:skill_id', async (req, res) => {
	const {skill_id} = req.params;
	const {name} = req.body;
	try {
		const Skill = await db.Skill.findOne({where: {id: skill_id}});
		var updateskill = await Skill.update({name: name});
	} catch(err) {
		return res.status(400).send({error: err, status: false});
	}
	
	res.send({skill: updateskill, status: true});
});

module.exports = app => app.use('/skill', router);