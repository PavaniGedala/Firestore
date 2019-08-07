const studentController = require('../controllers/student.controller');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .post(studentController.saveStudentDetails)
    .get(studentController.fetchStudentDetails);

router
    .route('/:id')
    .put(studentController.updateStudentDetailsByID)
    .delete(studentController.deleteStudentDetailsByID)
    .get(studentController.fetchStudentDetailsByID)
module.exports = router;
