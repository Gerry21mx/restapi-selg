const { Sequelize } = require("sequelize");
import config from "./../config";

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql'
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const getConnection = () => {
  return sequelize;
};

module.exports = {
  getConnection,
};
