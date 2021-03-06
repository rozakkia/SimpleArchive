/* jshint indent: 2 */
'use strict';
module.exports = (sequelize, DataTypes) => {
    var Type = sequelize.define('Type', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inisial: {
            type: DataTypes.STRING,
            allowNull: true
        },
        unique_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        has_paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        file_template: {
            type: DataTypes.STRING,
            allowNull: true
        },
        jenis: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        deletedAt: 'deletedAT',
        paranoid: true
    })
    Type.associate = models => {
        Type.hasMany(models.Mail,{})
        Type.hasMany(models.Bill,{})
        Type.belongsTo(models.Template, {
            foreignKey: {
                allowNull: false
            }
        });
        Type.belongsTo(models.Service, {
            foreignKey: {
                allowNull: false
            }
        });
        Type.belongsTo(models.Format_Num, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Type;
};