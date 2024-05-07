import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteCompanyReducer from "../reducers/favouriteCompanyReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  favouriteCompany: favouriteCompanyReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
