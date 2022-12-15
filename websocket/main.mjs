import CONFIG from "./config.json" assert {type : "json"};

const express = require('express');
const ws = require('ws');
const UserRouter = require('./app/routers/GameRouter.mjs');

const app = express();



const wsServer = new ws.Server({ noServer: true });

wsServer.on('connection', socket => {
    chat = new ChatController(socket);
    room = new RoomController(socket);
    game = new GameController(socket);
});


wsServer.on("connection", (socket) => {
    // send a message to the client
    socket.send(JSON.stringify({
      type: "message notification",
      content: [ 1, "2" ]
    }));

    socket.send(JSON.stringify({
        type: "room made notification",
        content: [ 1, "2" ]
      }));

      socket.send(JSON.stringify({
        type: "damage received notification",
        content: [ 1, "2" ]
      }));

      socket.send(JSON.stringify({
        type: "card changed notification",
        content: [ 1, "2" ]
      }));
  });




const server = app.listen(CONFIG.port);







