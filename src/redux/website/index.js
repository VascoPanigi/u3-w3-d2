import { configureStore } from "@reduxjs/toolkit";
import favouriteCompanyReducer from "../reducers";

const store = configureStore({
  reducer: favouriteCompanyReducer,
});

export default store;
