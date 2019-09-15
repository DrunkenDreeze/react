import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
// import Antdesign from './AntDesign.js';
import Todolist from './todolistRedux.js';
import { Provider } from "react-redux";
import store from "./storeRedux"

const app = (
	<Provider  store = { store }>
		<Todolist/>
	</Provider>
)

ReactDOM.render(
	// <TodoList />, 
	// <Antdesign />,
	// <Todolist />,
	app,
	document.getElementById('root')
);