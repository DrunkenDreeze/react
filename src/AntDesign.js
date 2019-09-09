import React, { Component } from "react";
import 'antd/dist/antd.css'; // 加载 CSS
import store from "./store";
import { getTodoList, getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitTodoList } from "./store/actionCreators";
import TodoListUI from "./TodoListUI";


class Antdesign extends Component {
	
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleResChange = this.handleResChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
		
		store.subscribe(this.handleResChange);//订阅store的改变
	}
	
	render() {
		return (<TodoListUI
				inputValue = {this.state.inputValue}
				handleInputChange = {this.handleInputChange}
				handleBtnClick = {this.handleBtnClick}
				list = {this.state.list}
				handleDeleteItem = {this.handleDeleteItem}
				/>)
	}
	
	componentDidMount() {
		const action = getTodoList();
		console.log(action);//action是一个函数，需要redux-thunk来自动执行
		store.dispatch(action);
	}
	
	handleInputChange(e) {
		var action = getInputChangeAction(e.target.value);
		store.dispatch(action);
	}
	
	handleResChange() {
		this.setState(store.getState());
	}
	
	handleBtnClick() {
		const action = getAddItemAction();
		store.dispatch(action);
	}
	
	handleDeleteItem(index) {
		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}
}

export default Antdesign;