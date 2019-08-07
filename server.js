
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

process.env.NODE_ENV = app.settings.env;

const student = require('./routes/student.route');
const mail = require('./routes/mail.route');

app.use((err, req, res, next) => {
    res.status(400).json({
        error: err.message
    });
});

app.use('/student', student);

app.use('/mail', mail);

app.listen(port, function () {
    console.log("Server is listening on port " + port);
});

module.exports = app;