import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { internetReducer } from "./slices/internetTvSlice";
import { healthReducer } from "./slices/healthInsuranceSlice";
import { headerReducer } from "./slices/headerTypeSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { homeReducer } from "./slices/homeInsuranceSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authState"],
};
const internetTvConfig = {
  key: 'internetTv',
  storage: storage
}
const healthInsuranceConfig = {
  key: 'healthInsurance',
  storage: storage
}
const homeInsuranceConfig = {
  key: 'homeInsurance',
  storage: storage
}
const headerConfig = {
  key: 'headerType',
  storage: storage
}
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  internetTv: persistReducer(internetTvConfig, internetReducer),
  healthInsurance: persistReducer(healthInsuranceConfig, healthReducer),
  homeInsurance: persistReducer(homeInsuranceConfig, homeReducer),
  headerType: persistReducer(headerConfig, headerReducer)
});
export const store = configureStore({
  reducer: rootReducer,
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;


