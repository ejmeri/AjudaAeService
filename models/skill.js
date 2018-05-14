module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Skill", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
			allowNull: false
        },
		area_id:{ type: DataTypes.INTEGER}
    });
};