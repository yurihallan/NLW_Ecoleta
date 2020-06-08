import express from 'express';
import PointsController from './controller/PointsController';
import ItemsController from './controller/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//Rota index - listar os items
routes.get('/items', itemsController.index);
//Rota create - Criar os items
routes.post('/points', pointsController.create);
//Rota index - lsitar todos os point
routes.get('/points',pointsController.index);
//Rota Find one - Buscar um item específico 
routes.get('/points/:id',pointsController.show);


export default routes;