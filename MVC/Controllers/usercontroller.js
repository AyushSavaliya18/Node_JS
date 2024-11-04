const user = require("../Models/userschema");

const usercreate = async () => {

    const userdata = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    };
    const data = await userModel.create(userdata);
    console.log(data);
    res.send(data);
}