// app.js
import express from 'express';
import config from './config';
import productRoutes from './routes/productos.routes';

const app = express();

// settings
app.set('port', config.port);

// middleware
app.use(express.json()); // Necesario si deseas parsear JSON en las peticiones

// routes
app.use('/api', productRoutes); // Usa la ruta que exportaste

export default app;
