const express = require("express");
// const jwt = require('jsonwebtoken');
// const privatekey = "#A*y*U*s*h#2710";

const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.json()) 

const db = require("./database/db")

//user functions
const { verifytoken } = require("./middleware/userAuth");
const { usercreate,
    userget, userupdate, userdelete, userlogin } = require("./controller/usercontroller")

//Api For send email 
const { sendEmail } = require("./controller/mail")
app.post("/sendEmail", sendEmail);

//API For otp match 
const { submitotp, resetpassword } = require("./controller/FPass")
app.post("/submitotp", submitotp);
app.post("/reset", resetpassword);

//User Login
app.post("/login", userlogin);

//user API
app.post("/insertuser", usercreate);
app.get("/getuser", verifytoken, userget);
app.put("/updateuser/:id", userupdate)
app.delete("/deleteuser/:id", userdelete);


//Category Functions
const { createcategory } = require("./controller/categorycontroller")
const { getonecategory } = require("./controller/categorycontroller")
const { getcategory } = require("./controller/categorycontroller")
const { updatecategory } = require("./controller/categorycontroller")
const { deletecategory } = require("./controller/categorycontroller")

//Category API
app.post("/createcategory", createcategory);
app.get("/getonecategory", getonecategory);
app.get("/getcategory", getcategory);
app.put("/updatecategory/:id", updatecategory);
app.delete("/deletecategory/:id", deletecategory);

// sub category Function
const { createsubcategory } = require("./controller/subcategorycontroller")
const { getonesubcategory } = require("./controller/subcategorycontroller")
const { getsubcategory } = require("./controller/subcategorycontroller")
const { updatesubcategory } = require("./controller/subcategorycontroller")
const { deletesubcategory } = require("./controller/subcategorycontroller")

//sub category API
app.post("/createsubcategory",createsubcategory);
app.get("/getsubcategory",getsubcategory);
app.get("/getonesubcategory",getonesubcategory);
app.put("/updatesubcategory/:id",updatesubcategory);
app.delete("/deletesubcategory/:id", deletesubcategory);

//Color Function
const {createcolor} = require('./controller/colorcontroller')
const {getonecolor} = require('./controller/colorcontroller')

//color API
app.post("/createcolor",createcolor);
app.post("/getonecolor",getonecolor);
app.listen(3000);