const http = require("http");
const {add, sub,multi,div} = require("./function");

http
  .createServer(function (req, res) {
    const n1 = 20;
    const n2 = 10;

    res.write(add(n1, n2));
    res.write(sub(n1, n2));
    res.write(multi(n1, n2));
    res.write(div(n1, n2));

    res.end();
  })
  .listen(8000);