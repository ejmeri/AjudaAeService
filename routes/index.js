var express = require('express');
var router = express.Router();


/**
 * @api {get} / API Status
 * @apiGroup Status
 * @apiSuccess {String} status Mensagem de status da TESTE
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * {"status": "NTask API"}
 */

router.get('/', (req, res) => {
    res.render('index');
});


module.exports = app => {
    app.use('/', router);
}