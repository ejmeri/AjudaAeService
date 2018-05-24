module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Skill", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
			allowNull: false
        },
		area_id:{ type: DataTypes.BIGINT}
    });
};