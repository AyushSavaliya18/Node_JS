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

const { usercreate, userget, userupdate, userdelete, userlogin } = require("./Controllers/usercontroller")

const verifytoken = async (req, res,next) => {
    try {
        const token = req.headers.authorization;
        await jwt.verify(token, privatekey, (err) => {
            if (err) {
                res.status(401).send("User is Unauthorized");
            }else{
                next();
            }
        });
    }
    catch (error) {
        res.status(401).send(error);

    }
}
//user API
app.post("/insertuser", usercreate);
app.get("/getuser", verifytoken,userget);
app.put("/updateuser/:id", userupdate)
app.delete("/deleteuser/:id", userdelete);

//User Login
app.post("/login", userlogin);

//Category Functions
const { createcategory } = require("./Controllers/categorycontroller")
const { getcategory } = require("./Controllers/categorycontroller")
const { updatecategory } = require("./Controllers/categorycontroller")
const { deletecategory } = require("./Controllers/categorycontroller")


//Category API
app.post("/createcategory", createcategory);
app.get("/getcategory", getcategory);
app.put("/updatecategory/:id", updatecategory);
app.delete("/deletecategory/:id", deletecategory);

app.listen(3000);