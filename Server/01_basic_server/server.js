const http = require("http");
const port = 4000;
const header = defaultCorsHeader;
header["Content-Type"] = "application/json";

const server = http.createServer(function (req, res) {
  if (req.method === "OPTIONS") {
    res.writeHead(header);
    res.end();
  }
  if (req.url === "/case1") {
    if (req.method === "GET") {
      res.writeHead(header);
      res.end();
    }
    if (req.method === "POST") {
      req
        .on("data", (chunk) => {
          let data = [];
          data.push(chunk);
        })
        .on("end", () => {
          data = Buffer.concat(data).toString();
          console.log(data);
          res.end();
        });
    }
  } else if (req.url === "/case2") {
    if (req.method === "POST") {
      req
        .on("data", (chunk) => {
          let data = JSON.parse(chunk);
          console.log(data);
        })
        .on("end", () => {
          res.writeHead(header);
          res.end();
        });
    }
  }
});
const defaultCorsHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": 10,
};
server.listen(port, function () {
  console.log(`listen on ${port}`);
});
