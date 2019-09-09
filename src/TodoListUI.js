import React, { Component } from "react";
import { Input, Button, List } from 'antd';	//引入Input


// class TodoListUI extends Component {
// 	render() {
// 		return (
// 			<div style={{marginLeft:"10px", marginTop:"10px"}}>
// 				<div>
// 					<Input 
// 						value = {this.props.inputValue} 
// 						placeholder = "todo info" 
// 						type = "text" 
// 						style = {{width:"300px",marginRight: "10px"}}
// 						onChange = { this.props.handleInputChange }
// 					/>
// 					<Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
// 				</div>
// 				<List
// 					style={{width:"300px", marginTop:"10px"}}
// 					bordered
// 					dataSource={this.props.list}
// 					renderItem={(item, index) => <List.Item onClick={() => {this.props.handleDeleteItem(index)}}>{item}</List.Item>}
// 				/>
// 			</div>
// 		)
// 	}
// }


/* 无状态组件 */
const TodoListUI = (props) => {
	return (
		<div style={{marginLeft:"10px", marginTop:"10px"}}>
			<div>
				<Input 
					value = { props.inputValue } 
					placeholder = "todo info" 
					type = "text" 
					style = {{width:"300px",marginRight: "10px"}}
					onChange = { props.handleInputChange }
				/>
				<Button type="primary" onClick={ props.handleBtnClick }>提交</Button>
			</div>
			<List
				style={{width:"300px", marginTop:"10px"}}
				bordered
				dataSource={ props.list }
				renderItem={(item, index) => <List.Item onClick={() => { props.handleDeleteItem(index) }}>{item}</List.Item>}
			/>
		</div>
	)
}



export default TodoListUI;