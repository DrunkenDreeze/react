import { INPUT_CHANGE, ADD_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from "./actionTypes";
import axios from "axios";

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

export const getInitTodoList = (data) => ({
	type: INIT_TODO_LIST,
	data
})

export const getTodoList = () => { //返回一个函数，因为用了redux-thunk，会自动执行该函数
	return (dispatch) => {
		axios.get("https://www.easy-mock.com/mock/5d73bdde0522cd1fe7b555fb/react/list").then((res) => {
			const data = res.data.data.list;
			const action = getInitTodoList(data);
			dispatch(action);
		}).catch((err) => {
			console.log(err);
		})
	}
}