import Room from '../models/Room.mjs';

class RoomDao {
    constructor() {
        this.listeRoom = new Array();
        console.log(`new RoomDAO`);
    }

    getAllRooms() {
        return this.listeRoom;
    }

    getRoom(roomID) {
        return this.listeRoom.filter(
            r => r.id === Number(roomID)
        );
    }

    deleteRoom(roomID) {
        return this.listeRoom.filter(
            r => r.id === Number(roomID)
        ).pop();
    }

    createRoom(userID,reward) {
        var room = new Room(this.listeRoom.length+1, userID, reward);
        this.listeRoom.push(room);
        return room;
    }

}
    
export default new RoomDao();