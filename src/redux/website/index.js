import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteCompanyReducer from "../reducers/favouriteReducer";

const rootReducer = combineReducers({
  favouriteCompany: favouriteCompanyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
