import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    homeInsurance: [],
    homeInsuRanceSingleProd: []
}

export const homeInsuRanceSingleProd = createSlice({
    name: "homeInsurance",
    initialState,
    reducers: {
        homeFormData: (state, action) => {
            state.homeInsurance = [action.payload]
        },
        singleHomeProdData: (state, action) => {
            state.homeInsuRanceSingleProd = [action.payload]
        },
    }
})

export const {singleHomeProdData, homeFormData } = homeInsuRanceSingleProd.actions;
export const homeReducer = homeInsuRanceSingleProd.reducer;