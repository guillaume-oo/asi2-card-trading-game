export const userUpdate = (obj)=>{
    return { type: 'SET_USER', obj:obj}
}
export const cardsUpdate = (obj)=>{
    return { type: 'UPDATE_LIST_CARD', obj:obj}
}
export const selectedCardUpdate = (obj)=>{
    return { type: 'UPDATE_SELECTED_CARD', obj:obj}
}
export const selectedCurrentCardUpdate = (obj)=>{
    return { type: 'UPDATE_CURRENT_SELECTED_CARD', obj:obj}
}
export const updateselectedcard1 = (obj)=>{
    return { type: 'SET_SELECTED_CARD_USER1', obj:obj}
}
export const updateSelectedCard2 = (obj)=>{
    return { type: 'SET_SELECTED_CARD_USER2', obj:obj}
}
export const updateUser1 = (obj)=>{
    return { type: 'SET_USER1', obj:obj}
}
export const updateUser2 = (obj)=>{
    return { type: 'SET_USER2', obj:obj}
}



