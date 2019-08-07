const config = require('config.json')('./env.json');
const mailConfig = config[process.env.NODE_ENV].mailConfig;

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: mailConfig.username,
        pass: mailConfig.password
    }
});

const sendMail = async function (data) {

    var mailOptions = {
        from: mailConfig.from, // sender address 
        to: data.to, // list of receivers 
        subject: data.subject, // Subject line 
        text: data.message // html body 
    };
    console.log(mailOptions);
    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        throw err;
    }

}

module.exports = { "sendMail": sendMail }