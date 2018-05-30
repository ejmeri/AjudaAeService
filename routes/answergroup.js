var express = require('express');
var router = express.Router();

var db = require('../models');
const Operator = require('sequelize').Op;

router.get('/', (req, res) => {
    res.send('Olá mundo, answergroup');
});

router.post('/', async (req, res) => {
    var answergroup = db.AnswerGroup;

    try {
        
        if(answergroup.question_group_id)
            return res.status(400).send({error: 'Question Group Id is required', status: false});

        var retorno = await db.AnswerGroup.create(answergroup);

    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }

    res.send({answergroup: retorno, status: true});
});

module.exports = app => app.use('/answergroup', router);