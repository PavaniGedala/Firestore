const mailController = require('../controllers/mail.controller');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .post(mailController.sendMail);

module.exports = router;
