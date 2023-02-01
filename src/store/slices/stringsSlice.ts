import { createSlice } from '@reduxjs/toolkit';

export const stringsSlice = createSlice({
    name: 'string',
    initialState: {
        value: [],
    },
    reducers: {
        setStringsData: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { setStringsData } = stringsSlice.actions;

export default stringsSlice.reducer;
