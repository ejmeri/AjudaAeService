module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Profile", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(120),
			allowNull: false
        },
		birthday: {
			type: DataTypes.DATE
		},
		status: {
			type: DataTypes.BOOLEAN
        },
        photo: {
            type: DataTypes.BLOB,
        },
		user_id:{ type: DataTypes.BIGINT}
    });
};