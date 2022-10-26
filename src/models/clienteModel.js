import { DataTypes } from "sequelize";
import {sequelize} from '../database/database';
import { unidad } from "./unidadModel";

export const cliente = sequelize.define('cliente',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  apellidoPaterno: {
    type: DataTypes.STRING(50)
  },
  apellidoMaterno: {
    type: DataTypes.STRING(50)
  },
  nombre: {
    type: DataTypes.STRING(50),
  },
  cp: {
    type: DataTypes.INTEGER,
  },
  calle: {
    type: DataTypes.STRING(50)
  },
  numeroExterior: {
    type: DataTypes.INTEGER
  },
  interior: {
    type: DataTypes.STRING(5)
  },
  colonia: {
    type: DataTypes.STRING(50)
  },
  municipio: {
    type: DataTypes.STRING(50)
  },
  estado: {
    type: DataTypes.STRING(50)
  },
  telefono: {
    type: DataTypes.STRING(20)
  },
  celular: {
    type: DataTypes.STRING(20)
  },
  email: {
    type: DataTypes.STRING(30)
  }
},{
  timestamps: false
});

cliente.hasMany(unidad,{
  foreignKey: 'idCliente',
  sourceKey: 'id'
});

unidad.belongsTo(cliente, {
  foreignKey: "idCliente",
  targetId: "id"
});