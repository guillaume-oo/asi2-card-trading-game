var listeRoom = [];

class RoomDao {
    constructor({}) {
        console.log(`new RoomDAO`);
    }

    getAllRoom() {
        return listeRoom;
    }

    getRoom(roomId) {
        return listeRoom.filter(
            r => r.id === Number(roomId)
        );
    }

    deleteRoom(roomId) {
        return listeRoom.filter(
            r => r.id === Number(roomId)
        ).pop();
    }

    createRoom(user1Id,user2Id) {
        room.roomId = listeRoom.length+1;
        room.user1Id = user1Id;
        room.user2Id = user2Id;
        listeRoom.push(room);
        return room;
    }

}
    
export default new RoomDao({});