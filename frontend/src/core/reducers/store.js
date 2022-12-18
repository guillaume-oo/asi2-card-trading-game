import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardReducer';
import userReducer from './userReducer';
import gameReducer from './gameRoom';

export default configureStore({
    reducer: {
        myUserReducer: userReducer,
        cardReducer: cardReducer,
        gameReducer: gameReducer,
    }
});