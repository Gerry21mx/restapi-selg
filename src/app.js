import express from "express";
import morgan from "morgan";

import servicioRoutes from "./routes/servicioRoutes";
import clienteRoutes from "./routes/clienteRoutes";
import unidadRoutes from "./routes/unidadRoutes";
import productoRoutes from './routes/productoRoutes';
import unidadMedidaRoutes from './routes/unidadMedidaRoutes';
import tipoMedida from './routes/tipoMedidaRoutes';

const app = express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes
app.use(servicioRoutes);
app.use(clienteRoutes);
app.use(unidadRoutes);
app.use(productoRoutes);
app.use(unidadMedidaRoutes);
app.use(tipoMedida);

export default app;