import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const unidad = sequelize.define('unidad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  year: {
    type: DataTypes.STRING(5),
  },
  marca: {
    type: DataTypes.STRING(30),
  },
  modelo: {
    type: DataTypes.STRING(30),
  },
  motor: {
    type: DataTypes.STRING(30),
  },
}, {
  timestamps: false
});