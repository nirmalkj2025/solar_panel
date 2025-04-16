import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Your reducers
import authReducer from "./reducers/authReducer";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // reducers to persist
};

// Combine and persist
const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with Redux DevTools and thunk middleware
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Create persistor
export const persistor = persistStore(store);
