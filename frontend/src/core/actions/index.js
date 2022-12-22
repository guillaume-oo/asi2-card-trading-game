//AUTH
export const userUpdate = (obj)=>{
    return { type: 'SET_USER', obj:obj}
}
export const defaultUsersUpdate = (obj)=>{
    return { type: 'SET_DEFAULT_USERS', obj:obj}
}

//CHAT
export const chatRoomIDUpdate = (obj)=>{
    return { type: 'SET_CHAT_ROOM_ID', obj:obj}
}
export const chatRoomMessagesUpdate = (obj)=>{
    console.log(" coucou from actions index")
    return { type: 'SET_CHAT_MESSAGES', obj:obj}
}
//USER CARDS
export const cardsUpdate = (obj)=>{
    return { type: 'UPDATE_LIST_CARD', obj:obj}
}

//MARKET
export const selectedCardUpdate = (obj)=>{
    return { type: 'UPDATE_SELECTED_CARD', obj:obj}
}
export const selectedCurrentCardUpdate = (obj)=>{
    return { type: 'UPDATE_CURRENT_SELECTED_CARD', obj:obj}
}


//GAME
export const gameOpponentSelectedCardUpdate = (obj)=>{
    return { type: 'SET_SELECTED_CARD_USER', obj:obj}
}
export const gameSelectedCardUpdate = (obj)=>{
    return { type: 'SET_SELECTED_CARD_ADVERSARY_USER', obj:obj}
}
export const gameOpponentUpdate = (obj)=>{
    return { type: 'SET_OPPONENT_USER', obj:obj}
}
export const gameRoomIdUpdate = (obj)=>{
    return { type: 'SET_GAME_ROOM_ID', obj:obj}
}
export const currentPlayingUserIdUpdate = (obj)=>{
    return { type: 'SET_CURRENTLY_PLAYING_USER_ID', obj:obj}
}
