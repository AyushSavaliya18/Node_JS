const http = require("http");
const {add, sub} = require("./function");

const url = require("url");
const querystring = require("querystring");

http
  .createServer(function (req, res) {
    const requrl = req.url;
    const parseurl = url.parse(req.url);

    const queryurl = querystring.parse(parseurl.query);

    console.log(queryurl.n1);
    console.log(queryurl.n2);
    // console.log(queryurl.query);
    // console.log(requrl);

    const n1 = queryurl.n1;
    const n2 = queryurl.n2;

    if (requrl.includes("./add")) {
      res.write(add(n1, n2));
    } else if (requrl.includes("./sub")) {
      res.write(sub(n1, n2));
    }

    res.end();
  })
  .listen(8000);
