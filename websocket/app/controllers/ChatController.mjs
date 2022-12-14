const ChatService = require('../services/');
const Chat = require('');

class ChatController {
    constructor({}) {
        console.log(`new ChatController`);
    }

    getChats(request, response) {
        response.json(ChatService.listChat());
    }

    getChat(request, response) {
        response.json(ChatService.getChat(request.params.ChatId));
    }

    createChat(request, response) {
        let Chat = new Chat(request.body);
        Chat = ChatService.addChat(Chat);
        response.json(Chat);
    }

    updateChat(request, response) {}

    deleteChat(request, response) {}
}

module.exports = new ChatController({});