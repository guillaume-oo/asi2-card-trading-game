import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardReducer';

export default configureStore({
    reducer: {
        cardReducer: cardReducer,
    }
});