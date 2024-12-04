const express = require('express');
const router = express.Router();
const instructorHandler = require('../handlers/instructorHandler');

// Rutas para instructores
router.post('/', instructorHandler.createInstructorHandler);
router.get('/', instructorHandler.getInstructorsHandler);
router.get('/:id', instructorHandler.getInstructorByIdHandler);
router.put('/:id', instructorHandler.updateInstructorHandler);
router.delete('/:id', instructorHandler.deleteInstructorHandler);

module.exports = router;
