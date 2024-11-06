const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Ayush");

const { usercreate } = require("./Controllers/usercontroller")
const {userget} = require("./Controllers/usercontroller")
const {userupdate} = require("./Controllers/usercontroller")


app.post("/insert", usercreate);
app.get("/getdata", userget);
app.put("/update/:id",userupdate)

// app.put("/update/:id", async (req, res) => {
//     const data = await userModel.updateOne(
//         { _id: req.params.id },
//         {
//             name: req.body.name,
//             email: req.body.email,
//             age: req.body.age,
//         }
//     );
//     console.log(data);
//     res.send(data);
// 

// app.delete("/delete/:id", async (req, res) => {
//     const data = await userModel.deleteOne({ _id: req.params.id });
//     console.log(data);
//     res.send(data);
// });
app.listen(3000);