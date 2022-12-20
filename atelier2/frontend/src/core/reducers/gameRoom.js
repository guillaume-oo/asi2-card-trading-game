let initState = {
    user1: {
    },
    user2:{
    },
    selected_card_u1 : -1,
    selected_card_u2 : -1,
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_SELECTED_CARD_USER":
            return {
                ...state,
                selected_card_u1: action.obj
            };
        case "SET_SELECTED_CARD_ADVERSARY_USER":
            return {
                    ...state,
                    selected_card_u2: action.obj
            };
        case "SET_ADVERSARY_USER":
            return {
                    ...state,
                    user1: action.obj
            };
        case "SET_REFRESH_USER1":
            return {
                ...state,
                user1: action.obj
            };
        case "SET_REFRESH_USER2":
            return {
                ...state,
                user2: action.obj
            };

        default:
            return state;
    }

}

export default gameReducer;