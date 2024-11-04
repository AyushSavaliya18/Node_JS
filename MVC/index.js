const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Ayush");

app.post("/insert", async (req, res) => {
    const userdata = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    };
    const data = await userModel.create(userdata);
    console.log(data);
    res.send(data);
});

app.get("/getdata", async (req, res) => {
    const data = await userModel.find();
    res.send(data);
});

app.put("/update/:id", async (req, res) => {
    const data = await userModel.updateOne(
        { _id: req.params.id },
        {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        }
    );
    console.log(data);
    res.send(data);
});

app.delete("/delete/:id", async (req, res) => {
    const data = await userModel.deleteOne({ _id: req.params.id });
    console.log(data);
    res.send(data);
});
app.listen(2000);