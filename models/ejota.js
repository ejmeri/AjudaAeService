module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Ejota", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ej: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING,
			allowNull: false
        },
		skill_id:{ type: DataTypes.INTEGER}
    });
};