import express from "express";
import morgan from "morgan";

import servicioRoutes from "./routes/servicioRoutes";
import clienteRoutes from "./routes/clienteRoutes";
import unidadRoutes from "./routes/unidadRoutes";
const app = express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes
app.use("/api/servicio", servicioRoutes);
app.use("/api/cliente", clienteRoutes);
app.use("/api/unidad", unidadRoutes);

export default app;