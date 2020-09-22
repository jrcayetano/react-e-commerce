import { combineReducers } from "redux";
import appReducer from "./AppReducers";
import basketReducer from "./BasketReducers";
import userLoggedReducer from "./UserLoggedReducers";

const rootReducer = combineReducers({
  app: appReducer,
  basket: basketReducer,
  userLogged: userLoggedReducer,
});

export default rootReducer;
