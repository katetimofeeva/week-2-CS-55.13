const http = require("http");

const fs = require("fs").promises;

const listener = (req, res) => {
  if (req.url === "/") {
    fs.readFile(__dirname + "/home.html")
      .then(result => {
        res.setHeader("Content-Type", "text/html; charset=UTF-8");
        res.writeHead(200);
        res.end(result);
      })
      .catch(err => {
        res.writeHead(500);
        res.end("Error loading home.html");
      });
  } else {
    fs.readFile(__dirname + "/data.json")
      .then(result => {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.writeHead(200);
        res.end(result);
      })
      .catch(err => {
        res.writeHead(500);
        res.end("Error loading data.json");
      });
  }
};

const host = "localhost";
const port = "3000";

const server = http.createServer(listener);
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
