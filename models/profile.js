module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Profile", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
			allowNull: false
        },
		birthday: {
			type: DataTypes.DATE
		},
		status: {
			type: DataTypes.BOOLEAN
		},
		user_id:{ type: DataTypes.INTEGER}
    });
};