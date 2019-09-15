import React, { Component } from "react";
import { getInputChangeAction, getAddItem, getDeleteItem } from "./storeRedux/actionCreator";
import { connect } from "react-redux";
 
class Todolist extends Component {
	render() {
		
		const { inputValue, list, inputChange, handleClick, handleDelete } = this.props;
		
		return(
			<div>
				<input onChange={inputChange} value={inputValue} />
				<button onClick = {handleClick}>提交</button>
				<ul>
					{
						list.map((item, index) => {
							return(
								<li onClick={() => { handleDelete(index) }} key={index}>{item}</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

// 将state（store数据）映射到props上
const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

// 将dipatch方法映射到props上
const mapDispatchToProps = (dispatch) => {
	return {
		inputChange(e) {
			const action = getInputChangeAction(e.target.value);
			dispatch(action);
		},

		handleClick() {
			const action = getAddItem();
			dispatch(action);
		},
		
		handleDelete(index) {
			const action = getDeleteItem(index);
			dispatch(action);
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Todolist);	
//connect方法作用：让Todolist与store连接起来
//mapStateToProps规则:把store数据映射成props
//mapDispatchToProps: 将dipatch方法映射到props上