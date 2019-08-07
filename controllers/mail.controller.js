const mailService = require('../services/mail.service');

const sendMail = async function (req, res, next) {
    try {
        let result = await mailService.sendMail(req.body);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}

module.exports = { "sendMail": sendMail }