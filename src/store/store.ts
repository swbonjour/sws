import { configureStore } from '@reduxjs/toolkit';
import stringsReducer from 'store/slices/stringsSlice';

export default configureStore({
    reducer: {
        stringReducer: stringsReducer,
    },
})