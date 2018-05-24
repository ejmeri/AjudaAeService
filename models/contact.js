module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Contact", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: DataTypes.STRING(11),
			allowNull: false
        },
		profile_id:{ 
            type: DataTypes.BIGINT,
        }
    });
};