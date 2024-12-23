const adminmodel = require('../model/adminSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { searchaddress } = require('./addresscontroller');
const privatekey = "#A*y*U*s*h#2710";

const createadmin = async (req, res) => {
    const { Admin_name, Email, Password, DOB, Phone, Gender } = req.body;

    const admindata = ({
        Admin_name: Admin_name,
        Email: Email,
        Password: Password,
        DOB: DOB,
        Phone: Phone,
        Gender: Gender
    });
    const bpass = await bcrypt.hash(Password, 12);
    console.log("Encrypted Password", bpass);
    admindata.Password = bpass;
    const data = await adminmodel.create(admindata);
    console.log("Created Admin: ", data);
    res.status(201).send({ message: 'Admin Created successfully', data });
};

const adminlogin = async (req, res) => {
    const { Email, Password } = req.body;
    console.log("!!!!", req.body.Password);

    try {
        const login = await adminmodel.findOne({ Email });
        console.log("Admin Login Data:", login);
        if (!login) {
            return res.status(404).send({ message: "Email is not valid" });
        }

        const adminpassword = await bcrypt.compare(Password, login.Password);
        console.log("Admin Password Comparison:", adminpassword);

        if (adminpassword) {
            const token = jwt.sign({ email: login.Email, userId: login._id, Password: login.Password }, privatekey, { expiresIn: '1h' });

            res.status(200).send({ message: "Admin logged in successfully", userId: login._id, token: token });
        } else {
            res.status(401).send({ message: "Entered password is incorrect" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send({ message: "Server error, please try again later" });
    }
};
const searchadmin = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await adminmodel.findById(id).populate('Admin_id');

        if (!data) {
            res.status(404).send({ message: "Admin not found" });
        }

        res.status(200).send({ message: "Admin found successfully", data: data });
        console.log("Admin found successfully", data);

    } catch (error) {
        console.error("Error finding admin by ID:", error);
        return res.status(500).send({ message: "Server error, please try again later" });
    }
};

const getadmin = async (req, res) => {

    const data = await adminmodel.find();
    console.log(data);
    res.status(202).send({ message: 'Admin Fetched successfully', data });
};

const updateadmin = async (req, res) => {
    const{Admin_name,Email,Password,DOB,Phone_no,Gender}=req.body;
    const data = await adminmodel.updateOne({ _id: req.params.id }, {
      "Admin_name": Admin_name,
      "Email": Email,
      "Password": Password,
      "DOB": DOB,
      "Phone_no": Phone_no,
      "Gender": Gender
    })
    console.log(data);
    res.status(202).send({message:"Admin Updated Successfully",data});
  };
  const admindeleted = async (req, res) => {
    const data = await adminmodel.findByIdAndDelete(req.params.id);
    console.log(data);
    res.status(202).send({message:"Admin Deleted Successfully",data});
  }

module.exports = { createadmin, adminlogin, searchadmin, getadmin, updateadmin,admindeleted };