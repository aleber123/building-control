import express from 'express';
import cors from 'cors';
import buildingRoutes from './routes/buildings';

const app = express();

app.use(cors());            // Enable CORS to allow cross-origin requests
app.use(express.json());     // Middleware to parse JSON bodies

// Use the building routes
app.use('/buildings', buildingRoutes);

app.get('/', (req, res) => {
  res.send('Hello from TypeScript Express server!');
});

// Export the app without calling listen
export default app;
