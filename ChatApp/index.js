const express = require("express");

const app = express();
const http = require("http");
const path = require("path");

const {Server} = require("socket.io");

const server = http.createServer(app);

const io = new Server(server);

io.on('connetion', (socket) => {
     console.log("New user has connected", socket.id);
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    return res.sendFile("./public/index.html");
});

server.listen(8003, () => console.log("Server Started"));