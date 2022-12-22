let initState = {
    user1: {
    },
    user2:{
    },
    selectedCardSelf : -1,
    selectedCardOpponent : -1,
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_SELECTED_CARD_USER":
            return {
                ...state,
                selectedCardSelf: action.obj
            };
        case "SET_SELECTED_CARD_ADVERSARY_USER":
            return {
                    ...state,
                    selectedCardOpponent: action.obj
            };
        case "SET_ADVERSARY_USER":
            return {
                    ...state,
                    user1: action.obj
            };

        default:
            return state;
    }

}

export default gameReducer;