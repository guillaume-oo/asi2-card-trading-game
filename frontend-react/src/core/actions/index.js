<<<<<<< HEAD
export const userUpdate = (obj)=>{
    return { type: 'SET_USER', obj:obj}
=======
export const cardsUpdate = (obj)=>{
    console.log("====== cards:"+ obj)
    return { type: 'UPDATE_LIST_CARD', obj:obj}
}
export const selectedCardUpdate = (obj)=>{
    console.log("====== updating slected card"+ obj)
    return { type: 'UPDATE_SELECTED_CARD', obj:obj}
>>>>>>> 266731b1949c4d57ef0670fa2aca3fab24dc7dbf
}