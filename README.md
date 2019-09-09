
## 脚手架构建项目
## cnpm install create-react-app -g
## create-react-app todolist
## cd todolist
## npm start


## todolist
*Fragment	占位符，也是一个组件，大写字母开头
*constructor(props) {super(props);}
*<input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
*this.setState({inputValue: e.target.value})
*onClick
*list: [...this.state.list, this.state.inputValue]  		...展开运算符
*onClick={this.handleItemDeleteClick.bind(this, index)}   	传递index
*注释1	{/*下面是input框*/}
*注释2 	{
			//下面是input框
		}
**设置类名 	<input className='input' />
**dangerouslySetInnerHTML={{__html:item}}
**<label htmlFor="insertArea">输入内容</label>
*this.handleClick = this.handleClick.bind(this);
*const {deleteItem, index} = this.props;解构赋值
*<ul>{ this.getTodoItem() }</ul>
*this.setState((prevState) => {
				const list = [...prevState.list];
				list.splice(index, 1);
				return {list}
			})


react思考：	
	*声明式的开发react-vue-Angela；命令式的开发jQuery直接操作dom；

	*可以与其他框架jQuery，vue一起使用；react只是挂载到了#root元素上，操作其他元素没有影响react

	*组件化开发(组件首字母大写，普通h5标签小写)；

	*单项数据流：父组件向子组件传值，子组件不允许改变父组件传递过来的值；子组件向父组件传值实现是通过：父组件向子组件传递一个方法来直接操作父组件的数据

	*视图层框架

	*函数式编程：更方便前端自动化测试


*TodoItem.propTypes = {content: PropTypes.string.isRequired}

**当一个组件的state或者props发生变化的时候，render函数就会重新执行

*虚拟dom：
	1.state数据
	2.jsx模板
	3.数据 + 模板 结合，生成真实的dom，来显示
	4.state发生改变
	5.数据 + 模板 结合，生成真实的dom，替换原始dom
	
缺陷：
	第一次生成了一个完整的dom片段
	第二次生成了一个完整的dom片段
	第二次的dom片段替换第一次的dom片段，非常耗费性能

改进：
	1.state数据
	2.jsx模板
	3.数据 + 模板 结合，生成真实的dom，来显示
	4.state发生改变
	5.数据 + 模板 结合，生成真实的dom，并不直接替换原始dom
	6.新的dom（DocumentFragment）和原始的dom做对比，找差异
	7.找出input框发生了变化
	8.只用新的dom中的input元素，替换掉老的dom中的input元素
	
虚拟dom：（减少了对真实dom的操作）
	1.state数据
	
	2.jsx模板
	
	3.生成虚拟dom(虚拟dom就是一个js对象，用来描述真实dom)
	["div", {id: "abc"}, ['span'], {} ,"hello world"]]
	
	4.数据 + 模板 结合，生成真实的dom，来显示
	<div id="abc"><span>hello world</span></div>
	
	5.state发生变化
	
	6.数据 + 模板 生成新的虚拟dom（极大的提升了性能）
	["div", {id: "abc"}, ['span'], {} ,"bye bye"]]
	
	7.比较原始虚拟dom和新的虚拟dom的区别，找到区别是span中的内容（使用diff算法比对）
	
	8.直接操作dom，改变span中的内容

虚拟dom优点：
	1.性能提升
	2.它使得跨端应用得以实现。React Native

	
	
jsx --> js对象(虚拟dom) --> 真实的dom


虚拟dom中的diff算法：
	1.同层比对，逐层对比
	2.key不能是index，key值应该是唯一的
	3.setState异步函数，多个setState函数合并为一个
	
*ref
*setState异步执行，第二个参数是回调函数
this.setState((prevState) => ({
	list: [...prevState.list, prevState.inputValue],
	inputValue: ""
}), () => {
	console.log(this.ul.querySelectorAll("li").length);
})


*React生命周期函数：
	componentWillMount:页面挂载之前
	
	componentDidMount：页面挂载之后

	render：state或者props变化时执行
	
	shouldComponentUpdate() {return true;}更新组件之前；return true；更新    return false；不可更新
	
	componentWillUpdate   更新组件之前并且shouldComponentUpdate  return true；
	
	
#react UI框架  antd ： https://ant.design/index-cn
cnpm install antd --save
import "antd/dist/antd.css"
import { Button, Input, List } from "antd";
#<Button></Button>

	
#redux
action  -(dispatch)->  store 
							   -  (subscribe)->  componet  
							   -  (prevState,action)  ->   reducer  -(newState)->  store
cnpm install --save redux
store/
	index.js
		import createStore from "redux";
		import reducer from "./reducer.js"
		store = createStore(reducer);
		export default store;
	reducer.js
		defaultState = {};
		export default (state = defaultState, action) => {return state}
#*action接受state，不可以直接改变state，需要深复制一个newState
redux devtools：chrome插件
actionTypes:解决因为输入变量不报错的问题
actionCreators：解决代码可维护性
store是唯一的
只有store能改变自己的数据；store的数据是拿到reducer的数据，自己改变内容
reducer是个纯函数

#reactUI组件（傻瓜组件）   react容器组件（聪明组件）
#无状态组件

#redux 异步请求axios

#redux-thunk


