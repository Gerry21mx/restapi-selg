import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { producto } from './productoModel';

export const unidadMedida = sequelize.define('unidadMedida',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
  },
  simbolo: {
    type: DataTypes.STRING(5)
  }
},{
   timestamps: false,
});

unidadMedida.hasMany(producto, {
  foreignKey: "idUnidadMedida",
  sourceKey: "id"
});

producto.belongsTo(unidadMedida, {
  foreignKey: "idUnidadMedida",
  targetId: "id"
});