import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    internetTv: [],
    internetSingleProd: [],
    compareProdIds: []
}

export const internetTvSlice = createSlice({
    name: 'internet',
    initialState,
    reducers: {
        internetFormData: (state, action) => {
            state.internetTv = [action.payload]
        },
        singleInternetProdData: (state, action) => {
            state.internetSingleProd = [action.payload]
        },
        compareIds: (state,action) => {
            state.compareProdIds = [action.payload]
        }
    }
})

export const { internetFormData,singleInternetProdData,compareIds } = internetTvSlice.actions;
export const internetReducer = internetTvSlice.reducer;