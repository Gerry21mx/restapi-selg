import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { unidadMedida } from "./unidadMedidaModel";

export const tipoMedida = sequelize.define("tipoMedida", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
  },
},{
  timestamps: false
});

tipoMedida.hasMany(unidadMedida, {
  foreignKey: "idTipoMedida",
  sourceKey: "id",
});

unidadMedida.belongsTo(tipoMedida, {
  foreignKey: "idTipoMedida",
  targetId: "id",
});
