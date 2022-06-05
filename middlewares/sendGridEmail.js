require('dotenv').config()

function sendGridEmail(correo, msg) {

    const sgMail = require('@sendgrid/mail');
    const API_KEY = process.env.SENDGRID_API_KEY;

    sgMail.setApiKey(API_KEY);

    const message = {
        to: correo,
        from: process.env.SENDGRID_SENDER_EMAIL,
        subject: 'ONG-OT197',
        text: msg

    }

    return (
        sgMail.send(message)
        .then((respose) => console.log("mensaje enviado"))
        .catch((err) => console.log(err)));
};

module.exports = { sendGridEmail };