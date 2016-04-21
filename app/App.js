// import React, { Component } from 'react';
// import {render} from 'react-dom';

// class App extends Component {
//   render(){
//     return (
//       <h1>Hello World</h1>
//     )
//   }
// }
// function test() {

// }

// class Hello extends Component {
// 	render() {
// 		var place = "World";
// 		return (
// 			<h1>Hello, {place} </h1>
// 		);
// 	}
// }

// render(<Hello />, document.getElementById('root'));

// var Hello = React.createClass({
// 	render: function() {
// 		var place = "World";
// 		return <h1>Hello,{place}</h1>;
// 	}
// });

// render(<Hello />, document.getElementById('root'));

// class GroceryList extends Component {
// 	render() {
// 		return (
// 			<ul>
// 				<ListItem quantity="1" name="Bread" />
// 				<ListItem quantity="2" name="Eggs" />
// 				<ListItem quantity="3" name="Milk" />
// 			</ul>
// 		)
// 	}
// }

// class ListItem extends Component{
// 	render() {
// 		return (
// 			<li>
// 				{this.props.quantity} x {this.props.name}
// 			</li>
// 		)
// 	}
// }

// class ListItem extends Component {
// 	render () {
// 		return (
// 			<li>
// 				{this.props.quantity} * {this.props.children}
// 			</li>
// 		)
// 	}
// }

// class GroceryList extends Component {
// 	render() {
// 		return (
// 			<ul>
// 				<ListItem quantity="1">bread</ListItem>
// 				<ListItem quantity="2"> milk </ListItem>
// 				<ListItem quantity="3"> egg </ListItem>
// 			</ul>
// 		)
// 	}
// }

// render(<GroceryList />, document.getElementById('root'));

import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanBoard from "./KanbanBoard";

let cardList = [
	{
		id: 1,
		title: "吃饭",
		description: "去一饭吃鸡扒饭",
		status: "in-progress",
		tasks: [
			{
				id: 1,
				name: "带雨伞",
				done: true
			},
			{
				id: 2,
				name: "带钥匙",
				done: false
			},
			{
				id: 3,
				name: "带手机",
				done: false
			}
		]

	},
	{
		id: 2,
		title: "下象棋",
		description: "[对战平台](http://www.cnblogs.com/yugege/p/5335437.html)",
		status: "todo",
		tasks: [
			{
				id: 4,
				name: "联系对手",
				done: true
			},
			{
				id: 5,
				name: "弃车绝杀",
				done: false
			},
			{
				id: 6,
				name: "卸载象棋软件",
				done: false
			}
		]
	},
	{
		id: 3,
		title: "看电影",
		description: "和女朋友看电影",
		status: "done",
		tasks: [
			{
				id: 7,
				name: "买电影票",
				done: true
			},
			{
				id: 8,
				name: "买薯条",
				done: false
			},
			{
				id: 9,
				name: "吃自助餐",
				done: false
			}
		]

	},
];

render(<KanbanBoard cards={cardList} />, document.getElementById('root'));

// let child1 = React.createElement("li", null, "First Text Content");
// let child2 = React.createElement("li", null, "Second Text Content");
// let root = React.createElement("ul", {className: "my-list"}, child2, child1);
// render(root, document.getElementById('root'));

// class Hello extends Component {
// 	render() {
// 		let divStyle = {
// 			width: "100",
// 			height: 30,
// 			padding: 5,
// 			fontSize: "24px",
// 			backgroundColor: "#ee9900"
// 		};		
// 		return <div style={divStyle} >Hello World</div>
// 	}
// }

// render(<Hello />, document.getElementById('root'));