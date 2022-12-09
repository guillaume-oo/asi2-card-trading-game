export const userUpdate = (obj)=>{
    return { type: 'SET_USER', obj:obj}
}
export const cardsUpdate = (obj)=>{
    return { type: 'UPDATE_LIST_CARD', obj:obj}
}
export const selectedCardUpdate = (obj)=>{
    return { type: 'UPDATE_SELECTED_CARD', obj:obj}
}