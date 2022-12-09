export const cardsUpdate = (obj)=>{
    console.log("====== cards:"+ obj)
    return { type: 'UPDATE_LIST_CARD', obj:obj}
}
export const selectedCardUpdate = (obj)=>{
    console.log("====== updating slected card"+ obj)
    return { type: 'UPDATE_SELECTED_CARD', obj:obj}
}