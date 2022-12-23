import Chat from "../models/Chat.mjs";
import Message from "../models/Message.mjs";

class ChatDAO {
    
    constructor({}) {
        console.log(`new ChatDAO`);
        this.chatRooms = new Array();
        this.messages = new Array();
    }

    listChat() {
        return this.chatRooms;
    }

    getChat(chatId) {
        return this.chatRooms.filter(chat=> chat.id == chatId)[0];
    }

    addChat(chat) {
        return this.chatRooms.add(chat);
    }

    deleteChat(chatId) {
        return this.chatRooms.splice(chatId, 1);
    }

    createChat(user1,user2) {
        var chat = new Chat(this.chatRooms.length+1, user1, user2);
        this.chatRooms.push(chat);
        return chat;
    }

    createMessage(chatId,userId,text) {
        var message = new Message(this.messages.length+1, chatId, userId,text);
        this.messages.push(message);
        return message;
    }
}

export default new ChatDAO({});