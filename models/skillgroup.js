module.exports = function (sequelize, DataTypes) {
    return sequelize.define("SkillGroup", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
		group_id: { type: DataTypes.BIGINT},
		skill_id : { type: DataTypes.BIGINT}
    });
};