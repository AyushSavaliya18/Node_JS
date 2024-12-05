const express = require("express");
const jwt = require('jsonwebtoken');
const privatekey = "#A*y*U*s*h#2710";

const app = express(); 
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.json()) 

const db = require("./database/db")

//user functions
const {verifytoken} = require("./middleware/userAuth");
const {usercreate, 
    userget, userupdate, userdelete,userlogin} = require("./controller/usercontroller")

//Api For send email 
const {sendEmail } = require("./controller/mail")
app.get("/sendEmail",sendEmail);

//API For otp match 
const {submitotp,resetpassword} = require("./controller/FPass")
app.post("/submitotp",submitotp);
app.post("/reset",resetpassword);

//User Login
app.post("/login", userlogin);

//user API
app.post("/insertuser", usercreate);
app.get("/getuser", verifytoken,userget);
app.put("/updateuser/:id", userupdate)
app.delete("/deleteuser/:id", userdelete);


//Category Functions
const { createcategory } = require("./controller/categorycontroller")
const { getcategory } = require("./controller/categorycontroller")
const { updatecategory } = require("./controller/categorycontroller")
const { deletecategory } = require("./controller/categorycontroller")

//Category API
app.post("/createcategory", createcategory);
app.get("/getcategory", getcategory);
app.put("/updatecategory/:id", updatecategory);
app.delete("/deletecategory/:id", deletecategory);
app.listen(3000);