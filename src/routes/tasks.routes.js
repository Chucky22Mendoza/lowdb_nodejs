const { Router } = require('express');
const router = Router();

const { getTasks, createTasks, getTask, updateTask, deleteTask }  = require('../controllers/tasks.controller');

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTasks);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;