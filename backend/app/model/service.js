module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Service', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        typeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Service_type',
                key: 'id',
            },
        },
    });
};
