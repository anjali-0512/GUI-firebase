import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { createSlice } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import quantityReducer from "./carttext";

const initialNameState = {
  fullname: "",
  email: "",
};

const userSlice = createSlice({
  name: "users",
  initialState: initialNameState,
  reducers: {
    addName: (state, action) => {
      state.fullname = action.payload;
    },

    addEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

const persistConfig = {
  key: "cart",
  storage,
};

const reducers = combineReducers({
  user: userSlice.reducer,
  cart: cartReducer,
  quant: quantityReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const userActions = userSlice.actions;

export default store;
