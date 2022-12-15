import CONFIG from "./config.json" assert {type : "json"};
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import SocketManager from "./app/SocketManager.mjs";
import ChatRouter from "./app/routers/ChatRouter.mjs";

import {Server} from "socket.io"

const app = express()
const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origins:["*"],

    handlePreflightRequest: (req,res) => {
        res.writeHead(200, {
            "Access-Control-Allow-Origin":  "*",
        })
    }}
});


// Handle connection
io.on("connection", function (socket) {
    console.log(`Socket ${socket.id} Connected succesfully to the socket ...`);
    SocketManager.push(socket);

    socket.on("disconnect", () => {
        SocketManager.delete(socket)
    })
});

server.listen(CONFIG.port);

app.use(bodyParser.json({}));

app.use(ChatRouter);

app.use(function(req, res){
    console.warn(`${req.path} 404`);
    res.status(404);
});
