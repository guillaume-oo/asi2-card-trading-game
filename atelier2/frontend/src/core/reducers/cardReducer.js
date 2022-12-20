let initState={
    cards:{},
    selectedCard:{}
}

const cardReducer = (state=initState,action) =>{
    switch(action.type){
        case "UPDATE_LIST_CARD":
            return {...state, 
                    cards:action.obj
                };

        case "UPDATE_SELECTED_CARD":
            return {...state,
                selectedCard:action.obj};
        
        default:
            return state;
    }

}

export default cardReducer;