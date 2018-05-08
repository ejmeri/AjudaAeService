var express = require('express');
var router = express.Router();

var db = require('../models');

router.get('/', (req, res) => {
    res.send('Hello User, your profile.');
});
    
router.post('/', async (req, res) => {
    const { description, profile_id, question_id } = req.body;

    try {
        
        if(!description)
            return res.status(400).send({error: 'Description is required', status: false});    
        
        if(!profile_id)
            return res.status(400).send({error: 'Profile id is required', status: false});

        if(!question_id)
            return res.status(400).send({error: 'Question id is required', status: false});

        var answer = await db.Answer.create({description : description, question_id: question_id, profile_id: profile_id});


    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }

    res.send({answer: answer, status: true })

});

module.exports = app => app.use('/answer', router);