const express = require('express');
const router = express.Router();
const {
    getStudent,
    getStudents,
    addStudent,
    deleteStudent
} = require('../controllers/studentController');

router.get('/:id' , getStudent);
router.get('/' , getStudents);
router.post('/' , addStudent);
router.delete('/' , deleteStudent);

module.exports = router
