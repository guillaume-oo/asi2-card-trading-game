import { default as roomDao } from '../dao/roomDao.mjs';

class RoomService {
    //liste des ID user
    listUserWaiting = [];
    listRoom = [];

    userWantToPlay(userID){
        listUserWaiting.push(userID);
        if (listUserWaiting.length == 2){
            id1 = listUserWaiting[0];
            id1 = listUserWaiting[1];
            roomDAO.createRoom(id1,id2);
            //TODO notify les 2 users
            //TODO appelr foncrion pour lancer la game
        }
    }


    createRoom(ID1,ID2){
        return roomDao.createRoom(ID1, ID2);
    }

    getRoom(roomID){
        return roomDao.getRoom(roomID);
    }

    getAllRooms() {
        return roomDao.getAllRoom();
    }
    
    deleteRoom(roomID){
        return roomDao.deleteRoom(roomID);
    }

}

module.exports = new RoomService({});