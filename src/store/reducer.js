const defaultState = {
	inputValue: "",
	list: []
};


// action只能接受state，不能直接改变state，所以要复制出来一份newState
export default (state = defaultState, action) => {
	if(action.type === "input_change") {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if(action.type === "add_item") {
		const newState = JSON.parse(JSON.stringify(state));
		console.log(newState,action);
		newState.list.push(newState.inputValue);
		newState.inputValue = "";
		return newState;
	}
	if(action.type === "delete_todo_item") {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}
	return state; //state就是数据
}