import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    healthInsurance: [],
    healthInsuranceSingleProd: [],
    HealthCompareProdIds: []
}

export const healthInsuranceSlice = createSlice({
    name: "healthIinsurance",
    initialState,
    reducers: {
        healthFormData: (state, action) => {
            state.healthInsurance = [action.payload]
        },
        singleHealthProdData: (state, action) => {
            state.healthInsuranceSingleProd = [action.payload]
        },
        compareIdsHealth: (state, action) => {
            state.HealthCompareProdIds = [action.payload]
        }
    }
})

export const {healthFormData, singleHealthProdData, compareIdsHealth } = healthInsuranceSlice.actions;
export const healthReducer = healthInsuranceSlice.reducer;