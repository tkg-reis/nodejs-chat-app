const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("all right connction");

    socket.on("chat message" ,(msg) => {
        console.log("message:" + msg);
        // クライアントサイドで見るための操作
        // クライアントサイドhtmlに送信する。
        io.emit("chat message", msg);
    });
})

server.listen(PORT, () => {
    console.log("listening to 3000");
})