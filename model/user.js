const {sequelize, DataTypes} = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const User =sequelize.define('User', {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'userName already in use!'
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail:true,
              },
            unique: {
                args: true,
                msg: 'Email address already in use!'
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                notEmpty: {
                    msg: "Password cannot be empty",
                  },
                  notNull: {
                    msg: "Password cannot be null",
                  },
                len: [6,15]
            }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });
    return User;
};