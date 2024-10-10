const express = require("express");
const {add} = require("./fun");
const app = express();

app.get("/", function (req, res) {
  res.send(add(5, 6));
});

app.listen(3000);
