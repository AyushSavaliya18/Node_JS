const user = require("../Models/userschema");

const usercreate = async (req, res) => {

    const userdata = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
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
        {_id: req.params.id},
        {
          name: req.body.name,
          email: req.body.email,
          age: req.body.age,
        }
      );
      console.log(data);
      res.send(data);
        }


module.exports = {
    usercreate, userget,userupdate
}