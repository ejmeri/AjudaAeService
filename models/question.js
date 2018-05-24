module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Question", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(500),
			allowNull: false
        },
		description: {
			type: DataTypes.STRING(2000),
			allowNull: false
		},
		profile_id:{ type: DataTypes.BIGINT }
    });
};