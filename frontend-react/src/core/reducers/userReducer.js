let initState={
    user:{
    }
}

const userReducer = (state=initState,action) =>{
    console.log(action)
    switch(action.type){
        case "SET_USER":
            return {user:action.obj};
        
        default:
            return state;
    }

}

export default userReducer;