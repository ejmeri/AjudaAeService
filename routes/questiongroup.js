var express = require('express');
var router = express.Router();

var db = require('../models');
const Operator = require('sequelize').Op;

router.get('/', (req, res) => {
    res.send('Olá mundo, questiongroup');
});

router.post('/', async (req, res) => {
    var questiongroup = db.QuestionGroup;

    try {
        
        if(questiongroup.profile_group_id)
            return res.status(400).send({error: 'Profile Group Id is required', status: false});

        var retorno = await db.QuestionGroup.create(questiongroup);

    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }

    res.send({questiongroup: retorno, status: true});
});

module.exports = app => app.use('/questiongroup', router);