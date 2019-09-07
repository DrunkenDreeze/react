import { INPUT_CHANGE, ADD_ITEM, DELETE_TODO_ITEM } from "./actionTypes";

export const getInputChangeAction = (value) => ({
	type: INPUT_CHANGE,
	value
})

export const getAddItemAction = () => ({
	type: ADD_ITEM
})

export const getDeleteItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
})