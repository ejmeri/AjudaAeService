module.exports = function (sequelize, DataTypes) {
    return sequelize.define("SkillQuestion",  {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
		question_id : { type: DataTypes.INTEGER},
		skill_id : { type: DataTypes.INTEGER}
		
    });
};