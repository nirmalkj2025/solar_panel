import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clientReducer from "./clientReducer";
import rmsReducer from "./rmsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  rms: rmsReducer,
});

export default rootReducer;
