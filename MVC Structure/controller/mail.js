const nodemailer = require('nodemailer');
const userModel = require('../model/userSchema');

const sendEmail = async (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const {email} = req.body;
    const findemail = await userModel.findOne({email:email})
    console.log(findemail);

    if (!findemail) {
       return res.status(404).send({message:"Email not found"})
    }

    const storeotp = await userModel.findByIdAndUpdate({_id:findemail.id},{Otp:otp},{new:true})

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ayushsavaliya1111@gmail.com',
            pass: 'spys lxhw oisz cipr'
        }
    });

    const mailOptions = {
        from: 'ayushsavaliya1111@gmail.com',
        to: 'ayushsavaliya18@gmail.com',
        subject: 'Two-Factor Authentications',
        html:`<h1>Your code of Two-Factor Authentication is :${otp} </h1>`,
    };

    // console.log(mailOptions);

    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent successfully!!: ',storeotp);

        }
    });

}
module.exports = {sendEmail}