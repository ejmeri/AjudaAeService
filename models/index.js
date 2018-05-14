//sempre trocar aqui quando for subir em producao, depois faço uma regra mais certinha pra prod e homo
const mysql = require('../config/postgres');

if (!global.hasOwnProperty('db')) {
	var Sequelize = require('sequelize'),
		sequelize = null

	// the application is executed on the local machine ... use mysql
	sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, mysql.params);


	global.db = {
		Sequelize: Sequelize,
		sequelize: sequelize,
		User: sequelize.import(__dirname + '/user'),
		Skill: sequelize.import(__dirname + '/skill'),
		Area: sequelize.import(__dirname + '/area'),
		Profile: sequelize.import(__dirname + '/profile'),
		SkillProfile: sequelize.import(__dirname + '/skillprofile'),
		Question: sequelize.import(__dirname + '/question'),
		Answer: sequelize.import(__dirname + '/answer'),
		SkillQuestion: sequelize.import(__dirname + '/skillquestion'),
		Reaction: sequelize.import(__dirname + '/reaction'),
		ReactionQuestion: sequelize.import(__dirname + '/reactionquestion'),
		CommentAnswer: sequelize.import(__dirname + '/commentanswer'),
		Contact: sequelize.import(__dirname + '/contact'),
		Group: sequelize.import(__dirname + '/group'),
		ProfileGroup: sequelize.import(__dirname + '/profilegroup'),
		SkillGroup: sequelize.import(__dirname + '/skillgroup'),
		// Ejota: sequelize.import(__dirname + '/ejota'),
		// add your other models here
	}

	/*
	  Associations can be defined here. E.g. like this:
	  global.db.User.hasMany(global.db.SomethingElse)
	*/

	global.db.User.hasMany(global.db.Profile)
	global.db.Profile.hasMany(global.db.SkillProfile)
	global.db.Skill.hasMany(global.db.SkillProfile)
	global.db.Area.hasMany(global.db.Skill)
	global.db.Profile.hasMany(global.db.Question)
	global.db.Profile.hasMany(global.db.Answer)
	global.db.Question.hasMany(global.db.Answer)
	global.db.Skill.hasMany(global.db.SkillQuestion)
	global.db.Question.hasMany(global.db.SkillQuestion)
	global.db.Question.hasMany(global.db.ReactionQuestion)
	global.db.Reaction.hasMany(global.db.ReactionQuestion)
	global.db.Answer.hasMany(global.db.CommentAnswer)
	global.db.Profile.hasMany(global.db.Contact)
	global.db.Group.hasMany(global.db.ProfileGroup)
	global.db.Profile.hasMany(global.db.ProfileGroup)
	global.db.Group.hasMany(global.db.SkillGroup)
	global.db.Skill.hasMany(global.db.SkillGroup)

	// JOINERS
	global.db.Question.belongsTo(global.db.Profile);

}

module.exports = global.db;