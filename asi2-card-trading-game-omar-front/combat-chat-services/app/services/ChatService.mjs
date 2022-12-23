import socketManager from "../../app/SocketManager.mjs";
import ChatDAO from "../../app/dao/ChatDAO.mjs";
import MessageDAO from "../../app/dao/MessageDAO.mjs";
import Chat from "../models/Chat.mjs";
import Message from "../models/Message.mjs";
import util from 'util'

class ChatService {
    constructor({}) {
        console.log(`new ChatService`);
    }

    listChat() {
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

    createNewChat(user1Id, user2Id){
        var chat = ChatDAO.createChat(user1Id,user2Id);
        var socket1 = socketManager.getSocketFromUserId(user1Id);
        var socket2 = socketManager.getSocketFromUserId(user2Id);

        socket1.emit("chat-room-created", chat.id);
        socket2.emit("chat-room-created", chat.id);

    }

    sendMessage(chatId,userId,message){
        var chat = ChatDAO.getChat(chatId);
        var socket1 = socketManager.getSocketFromUserId(chat.userA);
        var socket2 = socketManager.getSocketFromUserId(chat.userB);
        var message = ChatDAO.createMessage(chatId,userId,message);

        socket1.emit("new-message-received", message);
        socket2.emit("new-message-received", message);
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