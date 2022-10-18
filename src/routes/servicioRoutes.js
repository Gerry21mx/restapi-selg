import {Router} from "express";
import {methods as servicioController} from "../controllers/servicioController"

const router = Router(); 

router.get("/", servicioController.getServicios);
router.get("/:id", servicioController.getServicio);
router.post("/",servicioController.postServicio);
router.put("/:id", servicioController.updateServicio);
router.delete("/:id", servicioController.deleteServicio);


export default router;