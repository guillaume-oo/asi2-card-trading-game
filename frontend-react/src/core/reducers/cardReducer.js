let initState={
    cards:{}
}

const cardReducer = (state=initState,action) =>{
    console.log("action: " + action)
    switch(action.type){
        case "LIST_CARD":
            return {cards:action.obj};
        
        default:
            return state;
    }

}

export default cardReducer;