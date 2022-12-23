import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardReducer';
import userReducer from './userReducer';
import gameReducer from './gameReducer';
import chatReducer from './chatReducer';

export default configureStore({
    reducer: {
        userReducer: userReducer,
        cardReducer: cardReducer,
        gameReducer: gameReducer,
        chatReducer: chatReducer,
    }
});