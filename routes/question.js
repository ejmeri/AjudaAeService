var express = require('express');
var router = express.Router();

var db = require('../models');


router.get('/', (req, res) => {
    res.send('Olá mundo');
});

router.post('/', async (req, res) => {
    const {title, profile_id, description} = req.body;

    try {
        
        if(!title)
            return res.status(400).send({error: 'Title is required', status: false});
    
        if(!description)
            return res.status(400).send({error: 'Description is required', status: false});
        
        if(!profile_id)
            return res.status(400).send({error: 'Profile id is required', status: false});


        var question = await db.Question.create({title: title, description: description, profile_id: profile_id});

    } catch (err) {
        res.status(400).send({error: err, status: false});
    }

    res.send({question: question, status: true});
});

router.post('/skillquestion', async (req, res) => {

    const { question_id, skill_id } = req.body;

    try {
        
        if(!question_id)
            return res.status(400).send({error: 'Question id is required', status: false});
        
        if(!skill_id)
            return res.status(400).send({error: 'Skill id is required', status: false});  

        var skillquestion = await db.SkillQuestion.create({skill_id: skill_id, question_id: question_id});

    } catch (err) {
        res.status(400).send({error: err, status: false});
    }

    res.send({skillquestion: skillquestion, status: true})

});

router.post('/reactionquestion', async (req, res) => {

    const { question_id, reaction_id } = req.body;

    try {
        
        if(!reaction_id)
            return res.status(400).send({error: 'Reaction id is required', status: false});
        
        if(!skill_id)
            return res.status(400).send({error: 'Skill id is required', status: false});  

        var reactionquestion = await db.ReactionQuestion.create({reaction_id: reaction_id, question_id: question_id});

    } catch (err) {
        res.status(400).send({error: err, status: false});
    }

    res.send({ reactionquestion: reactionquestion, status: true})

});

module.exports = app => app.use('/question', router);