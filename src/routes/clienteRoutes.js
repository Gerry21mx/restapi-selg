import { Router } from "express";
import { deleteCliente, getCliente, getClientes, postCliente, updateCliente, getUnidadCliente} from "../controllers/clienteController";

const router = Router();

router.get("/api/cliente", getClientes);
router.get("/api/cliente/:id", getCliente);
router.get("/api/cliente/:id/unidad", getUnidadCliente);
router.post("/api/cliente", postCliente);
router.put("/api/cliente/:id", updateCliente);
router.delete("/api/cliente/:id", deleteCliente);

export default router;
