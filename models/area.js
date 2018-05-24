module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Area", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(80),
			allowNull: false
        }
    });
};