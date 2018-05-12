var db = require('../models');

exports.feedquestion = async (profile_id) => {
    // skillprofile -> skillquestion -> question
    const skillprofile = await db.SkillProfile.findAll({where: {profile_id: profile_id}});

    const skillquestion = await db.SkillQuestion.find(where)
}