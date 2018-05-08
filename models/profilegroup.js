module.exports = function (sequelize, DataTypes) {
    return sequelize.define("ProfileGroup", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        profile_id: {type: DataTypes.INTEGER },
        group_id: {type: DataTypes.INTEGER }
    });
};