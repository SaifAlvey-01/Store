import { combineReducers } from "redux";
import counterSlice from "./counterSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  counterSlice: counterSlice,
  userSlice,
});

export default rootReducer;
