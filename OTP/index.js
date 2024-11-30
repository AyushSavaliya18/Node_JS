const express = require("express");
const app = express(); 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// app.use(express.json()) 
const connectDB = require("./database/db");
connectDB();

const {userget,userlogin} = require("./controller/usercontroller")

app.get("/getuser",userget);
app.post("/login", userlogin);

app.get("getmail",mail);
app.listen(3000);