const studentService = require('../services/student.service');

const saveStudentDetails = async function (req, res, next) {
    try {
        let result = await studentService.saveStudentDetails(req.body);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

const fetchStudentDetails = async function (req, res, next) {
    try {
        let result = await studentService.fetchStudentDetails();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}
const updateStudentDetailsByID = async function (req, res, next) {
    try {
        let result = await studentService.updateStudentDetailsByID(req.params.id, req.body);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}
const deleteStudentDetailsByID = async function (req, res, next) {
    try {
        let result = await studentService.deleteStudentDetailsByID(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}

const fetchStudentDetailsByID = async function (req, res, next) {
    try {
        let result = await studentService.fetchStudentDetailsByID(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}
module.exports = { "saveStudentDetails": saveStudentDetails, "fetchStudentDetails": fetchStudentDetails, "deleteStudentDetailsByID": deleteStudentDetailsByID, "updateStudentDetailsByID": updateStudentDetailsByID, "fetchStudentDetailsByID": fetchStudentDetailsByID }