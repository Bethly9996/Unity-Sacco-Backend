import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { transactionReducer } from "./transactionReducer";

export const rootReducers = combineReducers({
	auth: authReducer,
	transactions: transactionReducer
})