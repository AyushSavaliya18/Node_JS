const user = require("../model/userSchema");
const bcrypt = require('bcrypt');
const submitotp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const emailotp = await user.findOne({ email: email });
        console.log(emailotp);
        
        if (!emailotp) {
            return res.status(404).send({ message: "Email not found!" });
        }
        
        if (emailotp.Otp === otp) {
            return res.status(202).send({ message: "Otp Matched Successfully!!!" });
        } else {
            return res.status(406).send({ message: "Otp Not Matched!!!" });
            
        }
        
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).send({ message: "An error occurred", error: error.message });
    }
}

const resetpassword = async (req, res) => {
    try {
        const { email, password } = req.body;
        const emailfind = await user.findOne({ email: email });

        if (!emailfind) {
            return res.status(404).send({ message: "Email not found!" });
        }

        const bpass = await bcrypt.hash(password, 12);
        const updatepassword = await user.findByIdAndUpdate(emailfind._id, { password: bpass }, { new: true });

        if (updatepassword) {
            return res.status(202).send({ message: "Password Updated Successfully!!!" });
        } else {
            return res.status(406).send({ message: "Password Not Updated!!!" });
        }
        
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).send({ message: "An error occurred", error: error.message });
    }
}
module.exports = { submitotp,resetpassword };