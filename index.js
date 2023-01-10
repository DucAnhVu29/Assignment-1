const http = require("http");
const express = require("express");

const morgan = require("morgan");

const hostname = "localhost";
const port = 5000;

const app = express();

const nationRouter = require("./routes/nationRouter");
const playerRouter = require("./routes/playerRouter");

app.use("/nations", nationRouter);
app.use("/players", playerRouter);

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
