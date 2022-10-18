import { Router } from "express";
import { methods as unidadController } from "../controllers/unidadController";

const router = Router();

router.get("/", unidadController.getUnidades);
router.get("/:id", unidadController.getUnidad);
router.post("/", unidadController.postUnidad);
router.put("/:id", unidadController.updateUnidad);
router.delete("/:id", unidadController.deleteUnidad);

export default router;
