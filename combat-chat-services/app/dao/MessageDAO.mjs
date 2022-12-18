class MessageDAO {
    chatRooms = new Array();
    messages = new Array();
    
    constructor({}) {
        console.log(`new MessageDAO`);
    }

    listMessage() {
        return messages
    }

    getMessage(messageId) {
        return messages.filter(message => message.id == messageId);
    }

    getMessagesFromChat(chatId) {
        return messages.filter(message => message.chatId == chatId);
    }

    addMessage(message) {
        return messages.add(message);
    }
}

export default new MessageDAO({});