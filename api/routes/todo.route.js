const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo.controller')
const { validateCreateTodo, validateUpdateTodo } = require('../validators/todo.validator');

router.get('/', controller.findAll) // listar todos os items
router.post('/', validateCreateTodo, controller.create) // criar novo item
router.put('/:id', validateUpdateTodo, controller.update) // editar item
router.put('/:id/complete', controller.complete) // completar item

module.exports = router;