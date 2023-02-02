import { configureStore } from '@reduxjs/toolkit';
import stringsReducer from 'store/slices/stringsSlice';
import itemCreationSlice from './slices/itemCreationSlice';

export default configureStore({
    reducer: {
        stringReducer: stringsReducer,
        itemReducer: itemCreationSlice,
    },
})