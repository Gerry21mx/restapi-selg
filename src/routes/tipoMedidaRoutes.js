import { Router } from 'express'
import { getTiposMedida, getTipoMedida, postTipoMedida, updateTipoMedida, deleteTipoMedida} from '../controllers/tipoMedidaController';

const router = Router();

router.get('/api/tipoMedida', getTiposMedida);
router.get('/api/tipoMedida/:id',getTipoMedida);
router.post('/api/tipoMedida', postTipoMedida);
router.put('/api/tipoMedida/:id', updateTipoMedida);
router.delete('/api/tipoMedida/:id', deleteTipoMedida);

export default router;