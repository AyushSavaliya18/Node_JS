const nodemailer = require('nodemailer')

const sendEmail = async (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ayushsavaliya1111@gmail.com',
            pass: 'spys lxhw oisz cipr'
        }
    });

    const mailOptions = {
        from: 'ayushsavaliya1111@gmail.com',
        to: 'manthandhameliya82382@gmail.com',
        subject: 'Two-Factor Authentications',
        html:`<h1>Your code of Two-Factor Authentication is :${otp} </h1>`,
    };

    console.log(mailOptions);
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent successfully!!: ' + info.response);
        }
    });

}
module.exports = {sendEmail}