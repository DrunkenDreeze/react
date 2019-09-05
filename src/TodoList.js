import React, {Component, Fragment} from 'react';
import TodoItem from "./TodoItem";

import "./style.css";


class TodoList extends Component{
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			list: ["学习英语", "学习汉语"]
		}
		
		this.handleItemDeleteClick = this.handleItemDeleteClick.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	componentWillMount() {
		console.log("componentWillMount");
	}
	componentDidMount() {
		console.log("componentDidMount");
	}
	
	shouldComponentUpdate() {
		console.log("shouldComponentUpdate");
		return true;
	}
	
	componentWillUpdate() {
		console.log("componentWillUpdate");
	}
	
	render() {
		console.log("render");
		return (
			<Fragment>
				{/*下面是input框*/}
				<div>
					<label htmlFor="insertArea">输入内容</label>
					<input 
						id="insertArea"
						className='input'
						value={this.state.inputValue} 
						onChange={this.handleInputChange}
						ref={(input)=>{this.input = input}}
					/>
					<button type="button" onClick={this.handleButtonClick}>提交</button>
				</div>
				<ul ref={(ul) => {this.ul = ul}}>
					{ this.getTodoItem() }
				</ul>
			</Fragment>
		)
	}
	
	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
			<Fragment key={index}>
				<TodoItem 
					content={item} 
					index={index} 
					deleteItem={this.handleItemDeleteClick}
				/>
				{/*
					<li 
						key={index} 
						onClick={this.handleItemDeleteClick.bind(this, index)}
						dangerouslySetInnerHTML={{__html:item}}
					>
					</li>
				*/}
			</Fragment>
			)
		})
	}
	
	handleInputChange(e) {
		const value = e.target.value;
		console.log(this.input.value);
		this.setState(() => {
			return {
				inputValue: value
			}
		})
// 		this.setState({
// 			inputValue: e.target.value
// 		})
	}
	
	handleButtonClick(e) {
		
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ""
		}), () => {
			console.log(this.ul.querySelectorAll("li").length);
		})
		
// 		this.setState({
// 			list: [...this.state.list, this.state.inputValue],
// 			inputValue: ""
// 		})
	}
	
	handleItemDeleteClick(index) {
			this.setState((prevState) => {
				const list = [...prevState.list];
				list.splice(index, 1);
				return {list}
			})
		
// 		const list = [...this.state.list];
// 		list.splice(index, 1);
// 		this.setState({
// 			list: list
// 		})
	}
}
export default TodoList;



// function TodoList() {
//   return (
//     <h1>hello,world!</h1>
//   );
// }
// export default TodoList; //可以导出一个函数
