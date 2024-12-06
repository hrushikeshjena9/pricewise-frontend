import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headerType: 'personal'
}

export const headertTypeSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setHeader: (state, action) => {
            state.headerType = action.payload
        }
    }
})

export const { setHeader } = headertTypeSlice.actions;
export const headerReducer = headertTypeSlice.reducer;