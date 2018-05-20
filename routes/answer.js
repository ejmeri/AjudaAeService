var express = require('express');
var router = express.Router();

var db = require('../models');

router.get('/', (req, res) => {
    res.send('Hello User, your profile.');
});

router.post('/', async (req, res) => {
    const {description, profile_id,question_id } = req.body;

    try {

        if (!description)
            return res.status(400).send({ error: 'Description is required',status: false });

      
        if (!profile_id)
            return res.status(400).send({error: 'Profile id is required',status: false});

        
        if (!question_id)
            return res.status(400).send({error: 'Question id is required',status: false});

      
        var answer = await db.Answer.create({description: description,question_id: question_id,profile_id: profile_id});


    } catch (err) {
        return res.status(400).send({
            error: err,
            status: false
        });
    }

    res.send({answer: answer,status: true});

});

// delete resposta
router.delete('/:answer_id', async (req, res) => {
    const {
        answer_id
    } = req.params;

    try {
        const Answer = await db.Answer.findOne({
            where: {
                id: answer_id
            }
        });

        if (!Answer)
            return res.status(400).send({
                error: 'Answer not found',
                status: false
            });


        Answer.destroy();

    } catch (err) {
        return res.status(400).send({
            error: err,
            status: false
        });
    }

    res.send({
        response: 'Answer deleted',
        status: true
    });

});




module.exports = app => app.use('/answer', router);