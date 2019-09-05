import React, {Component} from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	render() {
		const {content} = this.props;
		return(
			<li 
				onClick={this.handleClick}>
				{content}
			</li>
		)
	}
	
	handleClick() {
		// this.props.deleteItem(this.props.index);
		const {deleteItem, index} = this.props;
		deleteItem(index);
	}
}

TodoItem.propTypes = {
	content: PropTypes.string.isRequired,
	deleteItem: PropTypes.func,
	index: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

TodoItem.defaultProps = {
	content: "default-content"
}

export default TodoItem;