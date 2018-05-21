module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Reaction", {
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