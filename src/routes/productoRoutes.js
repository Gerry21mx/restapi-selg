import { Router } from 'express'
import { getProductos, getProducto, postProducto, updateProducto, deleteProducto } from '../controllers/productoController'

const router = Router();

router.get('/api/producto', getProductos);
router.get('/api/producto/:id', getProducto);
router.post('/api/producto', postProducto);
router.put('/api/producto/:id', updateProducto);
router.delete('/api/producto/:id', deleteProducto);

export default router;