import { createSlice } from '@reduxjs/toolkit';

export const stringsSlice = createSlice({
    name: 'string',
    initialState: {
        value: [],
    },
    reducers: {
        setStringsData: (state, action) => {
            state.value = action.payload;
            console.log(state.value);
        },
        deleteStringData: (state, action) => {
            state.value = state.value.filter(({id}) => id !== action.payload)
        }
    },
})

export const { setStringsData, deleteStringData } = stringsSlice.actions;

export default stringsSlice.reducer;
