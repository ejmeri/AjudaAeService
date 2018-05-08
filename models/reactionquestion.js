module.exports = function (sequelize, DataTypes) {
    return sequelize.define("ReactionQuestion", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
		question_id : { type: DataTypes.INTEGER},
		reaction_id : { type: DataTypes.INTEGER}
    });
};