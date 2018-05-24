module.exports = function (sequelize, DataTypes) {
    return sequelize.define("SkillProfile", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nivel: {
            type: DataTypes.INTEGER,
			allowNull: false
        },
		profile_id:{ type: DataTypes.BIGINT },
		skill_id: { type: DataTypes.BIGINT }
		
    });
};