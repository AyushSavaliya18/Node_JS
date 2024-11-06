const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Ayush");

const { usercreate } = require("./Controllers/usercontroller")
const {userget} = require("./Controllers/usercontroller")
const {userupdate} = require("./Controllers/usercontroller")
const {userdelete} = require("./Controllers/usercontroller")


app.post("/insert", usercreate);
app.get("/getdata", userget);
app.put("/update/:id",userupdate)

app.delete("/delete/:id",userdelete);
app.listen(3000);