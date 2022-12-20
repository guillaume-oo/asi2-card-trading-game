import util from 'util'
class SocketManager {
    socketMap = new Map();
    userMap = new Map();
 
    constructor() {
    }

    push(socket) {
        this.socketMap.set(socket.id, socket);
    }

    addUser(socketID, userID) {
        this.userMap.set(Number(userID), socketID);
    }

    getSocketFromUserId(userID){
        var socketID = this.userMap.get(Number(userID));
        return this.socketMap.get(socketID);
    }

    getAll(){
        return this.socketMap;
    }

    delete(socket){
        this.socketMap.delete(socket.id);
        // this.userMap.delete(user.id);
    }
}

export default new SocketManager();