module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Contact", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: DataTypes.STRING,
			allowNull: false
        },
		profile_id:{ 
            type: DataTypes.INTEGER,
        }
    });
};