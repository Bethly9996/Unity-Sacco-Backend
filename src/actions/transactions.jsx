import { types } from "../types/types";



export const startCreatingTransaction = (amount, userId) => {
	return async(dispatch) => {
		
		//TODO: FIX THE ENDPOINT OR THE FETCH TO CREATE TRANSACTIONS SUCCESSFULLY

		// const resp = await fetchConToken(`transactions/${userId}`, amount, 'POST');

		// const body = await resp.json();

		// console.log(body);


	}
}



const creatingTransaction = (amount, userId) => ({
	type: types.creatingTransaction,
	payload: {
		amount, userId
	}
})