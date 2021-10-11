const databaseconnection = require('../config/databaseconnection')
const Sequelize = require("sequelize");
const sequelize = new Sequelize(databaseconnection.DB, databaseconnection.USER, databaseconnection.PASSWORD, {
  host: databaseconnection.HOST,
  dialect: databaseconnection.dialect,
  operatorsAliases: false,
  logging: true,
  pool: {
    max: databaseconnection.pool.max,
    min: databaseconnection.pool.min,
    acquire: databaseconnection.pool.acquire,
    idle: databaseconnection.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync();

db.users = require("./user")(sequelize, Sequelize);

module.exports = db;