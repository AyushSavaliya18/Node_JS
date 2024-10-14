const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");


const app = express();
app.use(express.json());

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function getdata() {
    await client.connect();
    const db = client.db("employee");
    const collection = db.collection("emp");

    const data = await collection.find({}).toArray();

    //   console.log(data);
    return data;
}
// getdata();
app.get("/emp", async function (req, res) {
    const data = await getdata();
    console.log(data);

    res.send(data);
});

//*******************************   update

async function insert(userData) {
    await client.connect();
    const db = client.db("employee");
    const collection = db.collection("emp");

    const data = await collection.insertOne(userData);
    // console.log(data);
    return data;
}

app.post("/insert", async function (req, res) {
    const data = await insert(req.body);
    // console.log(data);

    res.send(data);
});




app.listen(8000);