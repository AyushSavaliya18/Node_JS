const express = require("express");
const {MongoClient, ObjectId} = require("mongodb");

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

// //*******************************   update

async function update(id, data1) {
  await client.connect();
  const db = client.db("employee");
  const collection = db.collection("emp");

  const data = await collection.updateMany(
    {
      _id: new ObjectId(id),
    },
    {$set: data1}
  );
  console.log(data1);
  return data;
}
// update();

app.post("/updateData/:id", async function (req, res) {
  const updateData = await update(req.params.id, req.body);
  console.log(updateData);

  res.send(updateData);
});
//   app.put("/update", async function (req, res) {
//     const data = await update(req.body);
//     // console.log(data);

//     res.send(data);
//   });
// }

async function del(id) {
  await client.connect();
  const db = client.db("employee");
  const collection = db.collection("emp");

  const data = await collection.deleteMany({
    _id: new ObjectId(id),
  });
  console.log(data);
  //   return data;
}
// del();

app.post("/deleteData/:id", async (req, res) => {
  const dataDelete = await del(req.params.id);
  console.log(dataDelete);

  res.status(200).send({message: "User Data Delete...."});
});

app.listen(8000);
