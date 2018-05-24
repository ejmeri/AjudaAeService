module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Answer", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING(2000),
			allowNull: false
        },
		question_id: { type: DataTypes.BIGINT },
		profile_id : { type: DataTypes.BIGINT }
    });
};