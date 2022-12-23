let initState = {
    user: {

    },
    defaultUsers: {}
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.obj
            };

        case "SET_DEFAULT_USERS":
            return {
                ...state,
                defaultUsers: action.obj
            };

        default:
            return state;
    }

}

export default userReducer;