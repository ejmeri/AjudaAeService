module.exports = function (sequelize, DataTypes) {
    return sequelize.define("User", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
			allowNull: false
        },
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
    });
};