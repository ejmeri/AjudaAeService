module.exports = function (sequelize, DataTypes) {
    return sequelize.define("CommentAnswer", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
			allowNull: false
        },
		answer_id : {
            type: DataTypes.INTEGER
        }
    });
};