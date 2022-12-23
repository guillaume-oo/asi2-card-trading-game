import RoomService from '../services/RoomService.mjs';

class RoomController {
    constructor({}) {
        console.log(`new RoomController`);
    }

    listRoom() {
        return getAllRooms() ;
    }

    joinQueue(request, response){
        response.json(RoomService.userWantToPlay(request.params.userId, request.params.reward));
    }

    leaveQueue(request, response){
        response.json(RoomService.userLeftQueue(request.params.userId, request.params.roomsId));
    }
}

export default new RoomController({});