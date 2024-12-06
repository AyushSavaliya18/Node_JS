const nodemailer = require('nodemailer');
const userModel = require('../model/userSchema'); // Import the model directly

const sendEmail = async (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const { email } = req.body;

    // Validate email input
    if (!email) {
        return res.status(400).send({ message: "Email is required" });
    }

    try {
        // Find user by email
        const findemail = await userModel.findOne({ email: email });

        if (!findemail) {
            return res.status(404).send({ message: "Email not found" });
        }

        // Store OTP in the database
        const storeotp = await userModel.findByIdAndUpdate(findemail._id, { Otp: otp }, { new: true });

        // Set up the transporter with environment variables
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ayushsavaliya1111@gmail.com',
                pass: 'spys lxhw oisz cipr' // Better to use environment variables for production
            }
        });

        // Email options
        const mailOptions = {
            from: 'ayushsavaliya1111@gmail.com',
            to: email,
            subject: 'Two-Factor Authentication',
            html: `<h1>Your OTP for Two-Factor Authentication is: ${otp}</h1>`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!!: ', storeotp);

        res.status(200).send({ message: 'OTP sent successfully to your email.' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Error in sending OTP email', error });
    }
};

module.exports = { sendEmail };
