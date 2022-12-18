class ChatDAO {
    chatRooms = new Array();
    messages = new Array();
    
    constructor({}) {
        console.log(`new ChatDAO`);
    }

    listChat() {
        // console.log("All chat rooms: " + this.chatRooms.length);
        console.log("connected users : " +socketManager.getAll().length)
        return chatRooms
    }

    getChat(chatId) {
        return chatRooms.filter(chat=> chat.id == chatId);
    }

    addChat(chat) {
        return chatRooms.add(chat);
    }

    deleteChat(chatId) {
        return chatRooms.splice(chatId, 1);
    }
}

export default new ChatDAO({});