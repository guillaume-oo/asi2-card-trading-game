export const userUpdate = (obj)=>{
    return { type: 'SET_USER', obj:obj}
}
export const chatRoomIDUpdate = (obj)=>{
    return { type: 'SET_CHAT_ROOM_ID', obj:obj}
}
export const chatRoomMessagesUpdate = (obj)=>{
    return { type: 'SET_CHAT_MESSAGES', obj:obj}
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

export const gameOpponentSelectedCardUpdate = (obj)=>{
    return { type: 'SET_SELECTED_CARD_USER', obj:obj}
}
export const gameSelectedCardUpdate = (obj)=>{
    return { type: 'SET_SELECTED_CARD_ADVERSARY_USER', obj:obj}
}
export const gameOpponentUpdate = (obj)=>{
    return { type: 'SET_ADVERSARY_USER', obj:obj}
}
export const refreshUser1 = (obj) => {
    return { type: 'SET_REFRESH_USER1', obj: obj }
}
export const refreshUser2 = (obj) => {
    return { type: 'SET_REFRESH_USER2', obj: obj }
}

