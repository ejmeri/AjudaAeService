const bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();

var db = require('../models');

router.get('/', (req, res) => {
    res.send('Hello User');
});

router.get('/:id', async (req, res) => {

    var user = await db.User.findOne({where: {id: req.params.id}});

    if(!user)
        return res.status(400).send({error: 'User not found', status : false});
    
    user.password = undefined;

    res.send({user: user, status: true});
});

router.put('/resetpassword/:id', async (req, res) => {

    var user = await db.User.findOne({where: {id: req.params.id}});
    var {oldpassword, password} = req.body;

    try {

        if (!await bcrypt.compare(oldpassword, user.password))
            return res.status(400).send({error: 'Invalid old password.', status: false});

        if (!password)
            return res.status(400).send({error: 'New password is required.', status: false});

        user.password = await bcrypt.hash(password, 10);

        await user.save();

    } catch (err) {
        return res.status(400).send({error: err, status: false});
    }
    
    res.send({user: 'The new password was saved.', status: true,  description: 'Password updated.'});
});

router.post('/', async (req, res) => {
    
    var {email, password} = req.body;

    try {

        if(!email)
            return res.status(400).send({error: 'Email is required.', status: false});

        if (await db.User.findOne({where: {email: email}}))
            return res.status(400).send({error: 'User already exists.', status: false});
        
        if (!password)
            return res.status(400).send({error: 'Password is required.', status: false});

        password = await bcrypt.hash(password, 10);
        

        var user = await db.User.create({email: email,password: password});

    } catch (err) {
       return res.status(400).send({error: err, status: true});
    }
        
    user.password = undefined;

    res.send({user: user, status: true});
});

router.post('/authenticate', async(req, res) => {
    
    const {email, password} = req.body;

    const user = await db.User.findOne({where: {email: email}}); // caso queira retornar a senha coloque findOne(campo).select('+password');
    
    if(!user) 
        return res.status(400).send({error: 'User not found', status: false});
    
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Invalid password ', status: false});

    user.password = undefined;


    res.send({user: user, status: true});
});

module.exports = app => app.use('/user', router);