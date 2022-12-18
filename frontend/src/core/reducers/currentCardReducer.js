let initState={
    cards:{},
    selectedCurrentCard:{}
}

const currentCardReducer = (state=initState,action) =>{
    switch(action.type){
        // case "UPDATE_LIST_CARD":
        //     return {...state, 
        //             cards:action.obj
        //         };

        case "UPDATE_CURRENT_SELECTED_CARD":
            return {...state,
                selectedCurrentCard:action.obj};
        
        default:
            return state;
    }

}

export default currentCardReducer;