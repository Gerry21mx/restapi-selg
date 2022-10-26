import Sequelize from 'sequelize';
import config from "./../config";

export const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql'
});