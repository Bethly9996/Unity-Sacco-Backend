import { types } from "../types/types";


const initialState = {
	lastTransaction: {}
}

export const transactionReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.creatingTransaction:
			
			return{
				...state,
				lastTransaction: action.payload.amount
			}
	
		default:
			return state;
	}
}