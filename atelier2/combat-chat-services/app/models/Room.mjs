class Room {
    constructor(id, waitingUser, reward) {
        this.id = id;
        this.waitingUser = waitingUser;
        this.reward = reward;
    }

    setReward(reward){
        this.reward = reward;
    }

    getReward()
    {
        return this.reward;
    }
}

export default Room;