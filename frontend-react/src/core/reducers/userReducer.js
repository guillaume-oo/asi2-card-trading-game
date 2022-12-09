let initState={
    user:{
    }
}

const userReducer = (state=initState,action) =>{
    switch(action.type){
        case "SET_USER":
            return {...state,
                user:action.obj};
        
        default:
            return state;
    }

}

export default userReducer;