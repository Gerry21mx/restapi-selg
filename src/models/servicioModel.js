import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database';

export const servicio = sequelize.define('servicio', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.STRING
    },
    precio: {
      type: DataTypes.DECIMAL
    }
},{
  timestamps: false
});