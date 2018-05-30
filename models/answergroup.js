module.exports = function (sequelize, DataTypes) {
    return sequelize.define("AnswerGroup", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING(2000),
			allowNull: false
        },
		question_group_id: { type: DataTypes.BIGINT }
    });
};