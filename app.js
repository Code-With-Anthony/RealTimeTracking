const express = require("express");
const app = express();

const http = require("http");
const path = require("path");
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
  console.log(`User connected: ${socket.id}`);
  socket.on("send-location", function (data) {
    io.emit("received-location", { id: socket.id, ...data });
  });

  socket.on("disconnect", function () {
    console.log(`User disconnected: ${socket.id}`);
    io.emit("user-disconnect", socket.id);
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3001);
