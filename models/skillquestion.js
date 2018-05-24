module.exports = function (sequelize, DataTypes) {
    return sequelize.define("SkillQuestion",  {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
		question_id : { type: DataTypes.BIGINT },
		skill_id : { type: DataTypes.BIGINT }
		
    });
};