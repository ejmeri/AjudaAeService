module.exports = function (sequelize, DataTypes) {
    return sequelize.define("SkillGroup", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
		group_id: { type: DataTypes.INTEGER},
		skill_id : { type: DataTypes.INTEGER}
    });
};