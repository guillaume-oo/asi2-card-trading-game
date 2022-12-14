const ChatDao = require('../dao/ChatDao');

class ChatService {
    constructor({}) {
        console.log(`new ChatService`);
    }

    listChat() {
        return ChatDao.getAllChats();
    }

    getChat(ChatId) {
        return ChatDao.getChat(ChatId);
    }

    addChat(Chat) {
        return ChatDao.createChat(Chat);
    }
}

module.exports = new ChatService({});