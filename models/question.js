module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Question", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
			allowNull: false
        },
		description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		profile_id:{ type: DataTypes.INTEGER}
    });
};