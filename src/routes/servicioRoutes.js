import {Router} from "express";
import {getServicios, getServicio, postServicio, updateServicio, deleteServicio} from "../controllers/servicioController";

const router = Router(); 

router.get("/api/servicio", getServicios);
router.get("/api/servicio/:id", getServicio);
router.post("/api/servicio", postServicio);
router.put("/api/servicio/:id", updateServicio);
router.delete("/api/servicio/:id", deleteServicio);


export default router;