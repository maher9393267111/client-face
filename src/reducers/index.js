import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import different from "./different";

const rootReducer = combineReducers({
  user: userReducer,
  different: different,
});

export default rootReducer;