// productos.routes.js
import { Router } from 'express';
const router = Router();

// Definimos las rutas
router.get('/productos', (req, res) => {
  res.send('Lista de productos');
});

export default router; // Exportamos el router para poder usarlo en otros archivos
