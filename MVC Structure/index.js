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
const {usercreate, userget, userupdate, userdelete,userlogin} = require("./controller/usercontroller")
const {sendEmail } = require("./controller/mail")

//send email api
app.get("/sendEmail",sendEmail);

//user API
app.post("/insertuser", usercreate);
app.get("/getuser", verifytoken,userget);
app.put("/updateuser/:id", userupdate)
app.delete("/deleteuser/:id", userdelete);

//User Login
app.post("/login", userlogin);

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