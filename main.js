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

// const http = require("http");
// const { add, sub, multi, div } = require("./function");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });

//     const n1 = 20;
//     const n2 = 10;

//     res.write(`Addition: ${add(n1, n2)}<br>`); // Use template literals and <br> for line breaks
//     res.write(`Subtraction: ${sub(n1, n2)}<br>`);
//     res.write(`Multiplication: ${multi(n1, n2)}<br>`);
//     res.write(`Division: ${div(n1, n2)}`);

//     res.end();
//   })
//   .listen(8000, () => {
//     console.log("Server is running on port 8000"); // Add this line to log a success message
//   });
