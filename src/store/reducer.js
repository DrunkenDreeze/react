import { INPUT_CHANGE, ADD_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from "./actionTypes";

const defaultState = {
	inputValue: "",
	list: []
};


// action只能接受state，不能直接改变state，所以要复制出来一份newState
// 纯函数：给定固定的输入，就会有固定的输出，而且不会有任何的副作用；不能含有settimeout，ajax等异步操作
export default (state = defaultState, action) => {
	if(action.type === INPUT_CHANGE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		// state.inputValue = action.value; //这时候就有副作用了，reducer不能直接改state
		return newState;
	}
	if(action.type === ADD_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		console.log(newState,action);
		newState.list.push(newState.inputValue);
		newState.inputValue = "";
		return newState;
	}
	if(action.type === DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}
	if(action.type === INIT_TODO_LIST) {
		console.log(state, action)
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.data;
		return newState;
	}
	return state; //state就是数据
}