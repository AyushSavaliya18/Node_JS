const http = require("http");
const {cel} = require("./celcious");

http
  .createServer(function (req, res) {
    res.write(cel());
    res.end();
  })
  .listen(8000);
