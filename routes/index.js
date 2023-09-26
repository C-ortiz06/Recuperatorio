// routes/index.js
const express = require('express');
const router = express.Router();

// Importa el controlador
const crudController = require('../controllers/crudController');


// Define una ruta para mostrar la vista "crud.ejs"
router.get('/', crudController.obtenerCanciones);

// Ruta para mostrar el formulario de creación
router.get('/crear', crudController.getCrear);

// Ruta para procesar el formulario de creación
router.post('/crear', crudController.crearCancion);

// Ruta para mostrar el formulario de edición
router.get('/editar/:id', crudController.editCancion);


module.exports = router;
