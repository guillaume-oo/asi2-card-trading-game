import ChatService from "../services/ChatService.mjs";
import Chat from "../models/Chat.mjs";
import Message from "../models/Message.mjs";

class ChatController {
    constructor({}) {
        console.log(`new ChatController`);
    }

    getChats(request, response) {
        response.json(ChatService.listChat());
    }

    getChat(request, response) {
        response.json(ChatService.getChat(request.params.chatId));
    }

    createChat(request, response) {
        response.json(ChatService.createChat(request.body));
    }

    deleteChat(request, response) {
        response.json(ChatService.deleteChat(request.params.chatId));
    }

    getMessages(request, response) {
        response.json(ChatService.listChat());
    }

    getMessage(request, response) {
        response.json(ChatService.getChat(request.params.chatId));
    }

    getMessagesFromChat(request, response) {
        response.json(ChatService.getMessagesFromChat(request.params.chatId));
    }

    createMessage(request, response) {
        response.json(ChatService.addMessageToChat(request.body,request.params.chatId));
    }
}

export default new ChatController({});