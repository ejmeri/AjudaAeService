var express = require('express');
var router = express.Router();

var db = require('../models');
const Operator = require('sequelize').Op;

router.get('/', (req, res) => {
    res.send('Olá mundo');
});

router.get('/feed', async (req, res) => {
    try {
        const questions = await fillfeed(); // only 75 questions randomize
    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }
    res.send({questions: questions, status: true});
});

router.get('/feed/:profile_id', async (req, res) => {

    const {profile_id} = req.params;
    const skillprofile = await db.SkillProfile.findAll({where: {profile_id: profile_id}});

    var questions = [];
    var skills_id = [];
    var questions_id = [];

    try {

        if(skillprofile == 0)
            return res.send({questions: await fillfeed(), status: true});
        else
            skillprofile.forEach(element => skills_id.push(element.skill_id));
        
        var skillquestion = await db.SkillQuestion.findAll({where: {skill_id: {[Operator.in]:[skills_id]}}, limit: 75, order: db.sequelize.random()});
        

        if(!skillquestion == 0) {
            skillquestion.forEach(element => questions_id.push(element.question_id));
            questions = await db.Question.findAll({ include: {model: db.Profile }, where:{id: {[Operator.in]:[questions_id]}}});            
        }
        else 
            return res.send({questions: await fillfeed(), status: true});
    
    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }
    
    res.send({questions: questions, status: true});
});

router.get('/unique/:title', async (req, res) => {
    const {title} = req.params;

    try {
        // var questions = ar PAREI NO MEIO MESMO RSRSRRRR
    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }
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

async function fillfeed() {
    return await db.Question.findAll({include: {model: db.Profile }, limit: 75, order: db.sequelize.random()}); 
}

async function allquestions() {
    return await db.Question.findAll({include: {model: db.Profile }, order: db.sequelize.random()});  
}

module.exports = app => app.use('/question', router);