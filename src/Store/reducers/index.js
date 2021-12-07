import { combineReducers } from "redux";

// My Reducer 
import securityReducer from './security';
import saleReducer from "./Sales";
import appReducer from "./app";

const rootReducer = combineReducers(
  {
    //All Reducers
    app: appReducer,
    security: securityReducer,
    sales: saleReducer
  }
)

export default rootReducer;