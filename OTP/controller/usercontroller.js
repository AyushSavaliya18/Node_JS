const user = require("../model/userschema")
const bcrypt = require('bcrypt');
const mail = require('nodemailer');

const usercreate = async (req, res) => {

    const { name, email, password, mobile } = req.body

    //validation for name
    if (!/^[a-zA-Z]+$/.test(name)) {
        return res.status(401).send({ message: "Name must contain only letters !!!" });

    }

    //validaiton for email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(401).send({ message: "Invalid Email !!!" });

    }

    const bpass = await bcrypt.hash(password, 12);
    console.log(bpass);
    const userdata = {
        name: name,
        email: email,
        password: bpass,
        mobile: mobile,
    };
    const data = await user.create(userdata);
    console.log(data);
    res.status(201).send(data);
}
const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("!!!!", req.body.password);
        const login = await user.findOne({ email: email })
        console.log("Data :", login);

        if (!login) {
            res.status(401).res.send({
                message: "email is not valid"
            });
        }
        const userpassword = await bcrypt.compare(password, login.password);
        console.log("User Password:", userpassword);
        if (!userpassword) {
            res.status(401).send({ message: "password is not valid" })
        }
        res.status(200).send({ message: "login success" })
    } catch (error) {
        res.status(401).send(error);
    }

}
const userget = async (req, res) => {
    const data = await user.find();
    console.log(data);
    res.status(202).send(data);
}

module.exports = {
    usercreate, userget, userlogin
}

