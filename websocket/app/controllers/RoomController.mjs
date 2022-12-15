const ChatDao = require('../dao/ChatDao');
const RoomService = require('../services/RoomService.mjs')

class RoomController {
    constructor({}) {
        console.log(`new roomService`);
    }

    listRoom() {
        return RoomService.getAllRooms() ;
    }

    getRoom(roomId) {
        return RoomService.getRoom(roomID) ;
    }

    createRoom(userID){
        RoomServices.createRoom()
    }

    startGame(rootID){
        return(userID)
    }

    joinQueue(userID){
        RoomService.userWantToPlay(userID)
    }



}

module.exports = new RoomController({});