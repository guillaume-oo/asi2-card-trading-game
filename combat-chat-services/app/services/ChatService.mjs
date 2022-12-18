import socketManager from "../../app/SocketManager.mjs";
import ChatDAO from "../../app/dao/ChatDAO.mjs";
import MessageDAO from "../../app/dao/MessageDAO.mjs";
import Chat from "../models/Chat.mjs";
import Message from "../models/Message.mjs";

class ChatService {
    constructor({}) {
        console.log(`new ChatService`);
    }

    listChat() {
        console.log("connected users : " +socketManager.getAll().length);
        ChatDAO.listChat();
        return chatRooms;
    }

    getChat(chatId) {
        return ChatDAO.getChat(chatId);
    }

    createChat(chat) {
        // notifie les users que le chat est créé ?
        return ChatDAO.addChat(chat);
    }

    deleteChat(chatId) {
        return ChatDAO.delete(chatId);
    }

    listMessage() {
        return MessageDAO.listMessage();
    }

    getMessagesFromChat(chatId) {
        return MessageDAO.getMessagesFromChat(chatId);
    }

    getMessage(messageId) {
        return MessageDAO.getMessage(messageId);
    }

    addMessageToChat(message) {
        //notifie un user qu'un messages est créé
        return MessageDAO.addMessage(message);
    }
}

export default new ChatService({});