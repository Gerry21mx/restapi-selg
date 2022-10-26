import { Router } from "express";
import { getUnidadesMedida, getUnidadMedida, postUnidadMedida, updateUnidadMedida, deleteUnidadMedida } from '../controllers/unidadMedidaController';

const router = Router();

router.get('/api/unidadMedida', getUnidadesMedida);
router.get('/api/unidadMedida/:id', getUnidadMedida);
router.post('/api/unidadMedida', postUnidadMedida);
router.put('/api/unidadMedida/:id', updateUnidadMedida);
router.delete('/api/unidadMedida/:id', deleteUnidadMedida);

export default router;
 