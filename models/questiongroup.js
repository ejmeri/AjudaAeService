module.exports = function (sequelize, DataTypes) {
    return sequelize.define("QuestionGroup", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(500),
			allowNull: false
        },
		description: {
			type: DataTypes.STRING(2000),
			allowNull: false
		},
		profile_group_id:{ type: DataTypes.BIGINT }
    });
};