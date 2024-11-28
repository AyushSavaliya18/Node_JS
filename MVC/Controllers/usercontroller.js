const user = require("../Models/userschema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privatekey = "#A*y*U*s*h#2710";

const usercreate = async (req, res) => {

    const { name, email, password, mobile } = req.body
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
    res.send(data);
}
const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("!!!!", req.body.password);
        const login = await user.findOne({ email: email })
        console.log("Data :",login);

        if (!login) {
            res.status(401).res.send({
                message: "email is not valid"
            });
        }
        const userpassword = await bcrypt.compare(password, login.password);
        console.log("User Password:", userpassword);

        if (userpassword) {
            const token = jwt.sign({ email: login.email ,password: login.password}, privatekey, { expiresIn: '1h' });

            res.status(202).send({ message: "User Login Sucessfully !!!", login, token :token})

        } else {
            res.status(401).send(" Entered Password is Wrong")
        }
    } catch (error) {
        res.send(error);
    }

}

const userget = async (req, res) => {
    const data = await user.find();
    console.log(data);
    res.send(data);
}

const userupdate = async (req, res) => {
    const data = await user.updateOne(
        { _id: req.params.id },
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile
        }
    );
    console.log(data);
    res.send(data);
}


const userdelete = async (req, res) => {
    const data = await user.deleteOne({ _id: req.params.id });
    console.log(data);
    res.send(data);
};

module.exports = {
    usercreate, userget, userupdate, userdelete, userlogin
}