module.exports = function (sequelize, DataTypes) {
    return sequelize.define("ProfileGroup", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        profile_id: {type: DataTypes.BIGINT },
        group_id: {type: DataTypes.BIGINT }
    });
};