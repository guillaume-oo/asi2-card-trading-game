class SocketManager {
    listSockets = new Array();
 
    constructor() {
        this.listSockets = new Array();
    }

    push(socket) {
        this.listSockets.push(socket);
    }

    getAll(){
        return this.listSockets;
    }

    delete(socket){
        listSockets.splice(socket, 1);
    }
}

export default new SocketManager();