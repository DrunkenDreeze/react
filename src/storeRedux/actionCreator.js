import { ADD_ITEM, INPUT_CHANGE, DELETE_ITEM } from "./actionTypes";

export const getInputChangeAction = (value) => {
	const action = {
		type: INPUT_CHANGE,
		value
	}
	return action;
}

export const getAddItem = () => {
	const action = {
		type: ADD_ITEM,
	}
	return action;
}

export const getDeleteItem = (index) => {
	const action = {
		type: DELETE_ITEM,
		index
	}
	return action;
}