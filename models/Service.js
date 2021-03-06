/* jshint indent: 2 */
'use strict';
module.exports = (sequelize, DataTypes) => {
    var Service = sequelize.define('Service', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unique: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color_theme: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },{
        deletedAt: 'deletedAT',
        paranoid: true
    })
    
    Service.associate = models => {
        Service.hasMany(models.Type, {});
    }

    return Service;
};