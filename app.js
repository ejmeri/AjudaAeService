var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

var path = require('path');
var engine = require('consolidate');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var db = require('./models'); // database and tables

const consign = require('consign');

consign()
    .include("routes")
    .into(app);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	res.render('notfound');
});


db.sequelize.sync(/*{force: true}*/).then(function () {
	server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
		var addr = server.address();
		console.log("Connected to ", addr.address + ":" + addr.port);
	});
});