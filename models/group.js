module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Group", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(80),
			allowNull: false
        },
		private:{ 
            type: DataTypes.BOOLEAN,
        }
    });
};