import express from 'express';

import { activityCheckin, 
    activityCheckout, 
    listActivities, 
    removeActivity } from './controllers/activitiesController.js';
import { insertVehicles, 
    listVehicles, 
    removeVehicle, 
    updateVehicles } from './controllers/vehiclesController.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    next();
});

app.get('/', (req, res) => {
    res.send({
        message: 'Bem vindo ao estacionamento Traco!'
    })
});

/* Endpoints Vehicles */
app.get('/api/vehicles', listVehicles);
app.post('/api/vehicles', insertVehicles);
app.put('/api/vehicles/:id', updateVehicles);
app.delete('/api/vehicles/:id', removeVehicle);

/* Endpoints Activities */
app.post('/api/activities/checkin', activityCheckin);
app.put('/api/activities/checkout', activityCheckout);
app.delete('/api/activities/:id', removeActivity);
app.get('/api/activities', listActivities);

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta localhost:${PORT} `);
})