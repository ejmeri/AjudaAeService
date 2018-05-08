module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Group", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
			allowNull: false
        },
		private:{ 
            type: DataTypes.BOOLEAN,
        }
    });
};