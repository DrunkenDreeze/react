import React, { Component } from "react";

import 'antd/dist/antd.css'; // 加载 CSS
	
import { Input, Button, List } from 'antd';	//引入Input

import store from "./store";

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class Antdesign extends Component {
	
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleResChange = this.handleResChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		
		store.subscribe(this.handleResChange);//订阅store的改变
	}
	
	render() {
		return (
			<div style={{marginLeft:"10px", marginTop:"10px"}}>
				<div>
					<Input 
						value = {this.state.inputValue} 
						placeholder = "todo info" 
						type = "text" 
						style = {{width:"300px",marginRight: "10px"}}
						onChange = { this.handleInputChange }
					/>
					<Button type="primary" onClick={this.handleBtnClick}>提交</Button>
				</div>
				<List
					style={{width:"300px", marginTop:"10px"}}
					bordered
					dataSource={this.state.list}
					renderItem={(item, index) => <List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>}
				/>
			</div>
		)
	}
	
	handleInputChange(e) {
		var action = {
			type: "input_change",
			value: e.target.value
		}
		store.dispatch(action);
	}
	
	handleResChange() {
		this.setState(store.getState());
	}
	
	handleBtnClick() {
		const action = {
			type: "add_item"
		}
		store.dispatch(action);
	}
	
	handleDeleteItem(index) {
		const action = {
			type: "delete_todo_item",
			index
		}
		store.dispatch(action);
	}
}

export default Antdesign;