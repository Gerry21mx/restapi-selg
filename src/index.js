import app from "./app";
import {sequelize} from './database/database';
import './models/servicioModel';
import './models/clienteModel';
import './models/unidadModel';
import './models/productoModel';
import './models/unidadMedidaModel';
import './models/tipoMedidaModel';

async function main(){
  try {
    await sequelize.sync({force: false});
    console.log("Connection has been established successfully.");
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();