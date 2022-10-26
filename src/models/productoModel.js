import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const producto = sequelize.define('producto',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100)
  },
  medida: {
    type: DataTypes.DECIMAL
  },
  precio: {
    type: DataTypes.DECIMAL
  }
},{
  timestamps: false
});