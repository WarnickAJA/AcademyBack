const express = require('express');
const router = express.Router();
const {
  createCourseHandler,
  getCoursesHandler,
  getCourseByIdHandler,
  updateCourseHandler,
  deleteCourseHandler
} = require('../handlers/courseHandler');

router.post('/', createCourseHandler);
router.get('/', getCoursesHandler);
router.get('/:id', getCourseByIdHandler);
router.put('/:id', updateCourseHandler);
router.delete('/:id', deleteCourseHandler);

module.exports = router;
