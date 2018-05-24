module.exports = function (sequelize, DataTypes) {
    return sequelize.define("ReactionQuestion", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
		question_id : { type: DataTypes.BIGINT},
		reaction_id : { type: DataTypes.BIGINT}
    });
};