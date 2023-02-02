import { createSlice } from '@reduxjs/toolkit';

export const itemCreationSlice = createSlice({
    name: 'itemCreation',
    initialState: {
        value: [false, ''],
    },
    reducers: {
        setItemCreationValue(state, action) {
            state.value = [!state.value, action.payload]
        }
    },
})

export const { setItemCreationValue } = itemCreationSlice.actions;

export default itemCreationSlice.reducer;