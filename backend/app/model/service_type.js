module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Service_type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }
    });
};
