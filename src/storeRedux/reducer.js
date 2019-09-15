import { ADD_ITEM, INPUT_CHANGE, DELETE_ITEM } from "./actionTypes";

const defaultState = {
	inputValue: "hello",
	list: [1, 2,3]
}

export default (state=defaultState, action) => {
	if(action.type === INPUT_CHANGE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if(action.type === ADD_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = "";
		return newState;
	}
	if(action.type === DELETE_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}
	return state;
}