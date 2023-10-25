import { combineReducers } from "redux";
import counterSlice from "./counterSlice";
import userSlice from "./userSlice";
import businessSlice from "./getBusiness";

const rootReducer = combineReducers({
  counterSlice: counterSlice,
  businessSlice,

});

export default rootReducer;
