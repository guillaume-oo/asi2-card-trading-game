class Message {
    constructor(id, chatId, authorId, text) {
        this.id = id;
        this.chatId = chatId;
        this.authorId = authorId;
        this.text = text;
    }
}

export default Message;