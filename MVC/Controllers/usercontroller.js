const user = require("../Models/userschema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privatekey = "#A*y*U*s*h#2710";


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

const userget = async (req, res) => {
    const data = await user.find();
    console.log(data);
    res.status(202).send(data);
}

const userupdate = async (req, res) => {
    const data = await user.updateOne(
        { _id: req.params.id },
        {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile
        }
    );
    console.log(data);
    res.status(202).send(data);
}


const userdelete = async (req, res) => {
    const data = await user.deleteOne({ _id: req.params.id });
    console.log(data);
    res.status(202).send(data);
};

module.exports = {
    usercreate, userget, userupdate, userdelete
}