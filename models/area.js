module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Area", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
			allowNull: false
        }
    });
};