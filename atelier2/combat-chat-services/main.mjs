import CONFIG from "./config.json" assert {type : "json"};
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import SocketManager from "./app/SocketManager.mjs";
import ChatRouter from "./app/routers/ChatRouter.mjs";
import RoomRouter from "./app/routers/RoomRouter.mjs";
import GameRouter from "./app/routers/GameRouter.mjs";
import {Server} from "socket.io"


const app = express()

app.use(cors({
    origin: "*"
}));

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
    console.log(`Socket ${socket.id} Connected succesfully ...`);
    SocketManager.push(socket);

    socket.on("disconnect", () => {
        console.log(`Socket ${socket.id} Disconnected ...`);  
        SocketManager.delete(socket)
    })
});

server.listen(CONFIG.port);

app.use(bodyParser.json({}));

app.use(ChatRouter);
app.use(GameRouter);
app.use(RoomRouter);
app.post("/user", (req, res, next) => {
    console.log("hello")
    console.log(req.body)
    SocketManager.addUser(req.body.socketID, req.body.userID)
    res.status(200).send({
      success: true,
    });
});

app.use(function(req, res){
    console.warn(`${req.path} 404`);
    res.status(404);
});
