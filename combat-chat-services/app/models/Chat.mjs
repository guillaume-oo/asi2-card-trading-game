class Chat {
    constructor(id, userA, userB) {
        this.id = id;
        this.userA = userA;
        this.userB = userB;
    }

    getUserA()
    {
        return this.userA;
    }

    getUserB()
    {
        return this.userB;
    }
}

export default Chat;