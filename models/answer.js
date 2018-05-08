module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Answer", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
			allowNull: false
        },
		question_id: { type: DataTypes.INTEGER},
		profile_id : { type: DataTypes.INTEGER}
    });
};