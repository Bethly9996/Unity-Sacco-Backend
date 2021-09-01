import { types } from "../types/types";


const initialState = {
	lastTransaction: {}
}

export const transactionReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.creatingTransaction:
			
			return{
				...state,
				...action.payload
			}
	
		default:
			return state;
	}
}