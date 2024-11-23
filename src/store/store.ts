import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default is localStorage
import userReducer from "../reducers/userReducer"; // Adjust the path as necessary
import { combineReducers } from "redux";

// Combine your reducers (if you have more in the future)
const rootReducer = combineReducers({
  user: userReducer,
});

// Persist configuration
const persistConfig = {
  key: "root", // Key for storage
  storage, // Use localStorage
  whitelist: ["user"], // Only persist specific slices
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
});

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Create persistor for the persisted state
export const persistor = persistStore(store);

export default store;
