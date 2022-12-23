let initState = {
    chatRoomId: 0,
    chatMessages: [],
}

const chatReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_CHAT_ROOM_ID":
            return {
                ...state,
                chatRoomId: action.obj
            };
        
        case "SET_CHAT_MESSAGES":
            return {
                ...state,
                chatMessages: [...state.chatMessages, action.obj]
            };

        default:
            return state;
    }

}

export default chatReducer;