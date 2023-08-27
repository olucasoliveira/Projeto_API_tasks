const express = require('express');
const tasksController = require('./controllers/tasksController.js');
const tasksMiddlewares = require('./middlewares/tasksMiddleswares.js')

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddlewares.validarFiledTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
     tasksMiddlewares.validarFiledStatus, 
     tasksMiddlewares.validarFiledTitle, 
     tasksController.updateTask
);


module.exports = router;


