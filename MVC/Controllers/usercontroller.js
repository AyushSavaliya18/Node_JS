const user = require("../Models/userschema");

const usercreate = async (req, res) => {

    const { name, email, password,mobile } = req.body
    const userdata = {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
    };
    const data = await user.create(userdata);
    console.log(data);
    res.send(data);
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
    usercreate, userget, userupdate, userdelete
}