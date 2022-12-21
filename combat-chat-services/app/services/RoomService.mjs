import RoomDao from '../dao/RoomDao.mjs';
import socketManager from "../../app/SocketManager.mjs";
import util from 'util';

class RoomService {
    constructor({}) {
        console.log(`new RoomService`);
    }

    userWantToPlay(joiningUserID, reward){
        var socket = socketManager.getSocketFromUserId(joiningUserID);
        socket.emit("user-put-in-queue");

        var room = this.findRoom(reward); 
        console.log('room trouvé :' + room)
        if (!room){
            var room = RoomDao.createRoom(joiningUserID, reward);
            console.log('created room: ' +room + " with reward: " + room.getReward())
            return;
        }
        else {
            var socket1 = socketManager.getSocketFromUserId(room.waitingUser);
            var socket2 = socketManager.getSocketFromUserId(joiningUserID);

            if (this.createChatRoomRemotly(room.waintingUser,joiningUserID) && this.createGameRoomRemotly(room.waintingUser,joiningUserID)){
                socket1.emit("room-created", "room-"+room.waintingUser+"-"+joiningUserID);
                socket2.emit("room-created", "room-"+room.waintingUser+"-"+joiningUserID);
            }
        }
    }

    userExitsRoom(userID){
        console.log(userID);
        socket = socketManager.getSocketFromUserId(userID);
        socket.emit("user-removed-from-queue");
    }

    findRoom(reward){
        console.log(reward);

        console.log(util.inspect(RoomDao.getAllRooms(), {depth: null}))

        var room = RoomDao.getAllRooms().find(room => Number(room.reward) == Number(reward));
        return room;
    }

    createChatRoomRemotly(ID1, ID2){
        return true
        // var request = require('request');

        // request.post(
        //     'http:/localhost:9999/room',
        //     { json: { userA: ID1, userB: ID2 } },
        //     function (error, response, body) {
        //         if (!error && response.statusCode == 200) {
        //             return true
        //         }
        //     }
        // );
    }

    createGameRoomRemotly(ID1, ID2){
        // var request = require('request');

        // request.post(
        //     'http:/localhost:9999/room',
        //     { json: { userA: ID1, userB: ID2 } },
        //     function (error, response, body) {
        //         if (!error && response.statusCode == 200) {
        //             return true
        //         }
        //     }
        // );
        return true
    }

    getRoom(roomID){
        return RoomDao.getRoom(roomID);
    }

    getAllRooms() {
        return RoomDao.getAllRoom();
    }
    
    deleteRoom(roomID){
        return RoomDao.deleteRoom(roomID);
    }

}

export default new RoomService({});