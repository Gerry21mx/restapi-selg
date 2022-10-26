import { Router } from "express";
import { getUnidades, getUnidad, postUnidad, updateUnidad, deleteUnidad } from "../controllers/unidadController";

const router = Router();

router.get("/api/unidad", getUnidades);
router.get("/api/unidad/:id", getUnidad);
router.post("/api/unidad", postUnidad);
router.put("/api/unidad/:id", updateUnidad);
router.delete("/api/unidad/:id", deleteUnidad);

export default router;
