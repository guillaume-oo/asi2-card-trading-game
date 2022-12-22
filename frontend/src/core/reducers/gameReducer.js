let initState = {
    opponentUser: {},
    selectedCardSelf : -1,
    selectedCardOpponent : -1,
    currentPlayingUserId: -1,
    gameRoomId: -1,
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_SELECTED_CARD_USER":
            return {
                ...state,
                selectedCardSelf: action.obj
            };
        case "SET_SELECTED_CARD_OPPONENT_USER":
            return {
                ...state,
                selectedCardOpponent: action.obj
            };
        case "SET_OPPONENT_USER":
            return {
                ...state,
                opponentUser: action.obj
            };
        case "SET_GAME_ROOM_ID":
            return {
                ...state,
                gameRoomId: action.obj
            };
        case "SET_CURRENTLY_PLAYING_USER_ID":
            return {
                ...state,
                currentlyPlayingUserId: action.obj
            };

        default:
            return state;
    }

}

export default gameReducer;