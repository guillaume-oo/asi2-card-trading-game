import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardReducer';
import userReducer from './userReducer';

export default configureStore({
    reducer: {
        myUserReducer: userReducer,
        cardReducer: cardReducer,
    }
});