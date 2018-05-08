module.exports = function (sequelize, DataTypes) {
    return sequelize.define("SkillProfile", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nivel: {
            type: DataTypes.INTEGER,
			allowNull: false
        },
		profile_id:{ type: DataTypes.INTEGER },
		skill_id: { type: DataTypes.INTEGER}
		
    });
};