import RoomDao from '../dao/RoomDao.mjs';
import socketManager from "../../app/SocketManager.mjs";

class RoomService {
    //liste des ID user
    listUserWaiting = new Array();
    listRoom = new Array();

    constructor({}) {
        console.log(`new RoomService`);
    }

    userWantToPlay(userID){
        this.listUserWaiting.push(userID);

        socketManager.getAll().map( socket => {
            console.log(socket.id);
            socket.emit("You are in queue");
        })

        if (this.listUserWaiting.length == 2){
            var id1 = this.listUserWaiting[0];
            var id2 = this.listUserWaiting[1];
            this.listUserWaiting = new Array();
            this.createRoom(id1,id2);
        }
    }

    createRoom(ID1,ID2){
        //TODO notify les 2 users
        //TODO creer un chat
        //TODO creer une game

        socketManager.getAll().map( socket => {socket.emit("Partner found") })
        return RoomDao.createRoom(ID1, ID2);
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