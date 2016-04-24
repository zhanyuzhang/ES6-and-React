import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import KanbanBoardContainer from "./KanbanBoardContainer";


render(<KanbanBoardContainer />, document.getElementById('root'));
// render(<KanbanBoard cards={cardList} />, document.getElementById('root'));



// class Hello extends Component {
// 	getFocus() {
// 		this.refs.input.focus();
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<input type="text" ref="input" />
// 				<input type="button" value="focus the text input" onClick={this.getFocus.bind(this)} />
// 			</div>
// 		)
// 	}
// }

// render(<Hello />, document.getElementById('root'));
// class Search extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			searchTerm: "React"
// 		};
// 	};

// 	handleChange(event) {
// 		this.setState({searchTerm: event.target.value.slice(0, 6)});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				Search Term:
// 				<input type="search" value={this.state.searchTerm} onChange={this.handleChange.bind(this)} placeholder="please enter the key words"/>
// 			</div>
// 		);
// 	}

// 	// handleSubmit(event) {
// 	// 	console.log("Submitted values are: ",
// 	// 	event.target.name.value,
// 	// 	event.target.email.value);
// 	// 	event.preventDefault();
// 	// }
// 	// render() {
// 	// 	return (
// 	// 		<form onSubmit={this.handleSubmit}>
// 	// 			<div className="formGroup">
// 	// 				Name: <input name="name" type="text" />
// 	// 			</div>
// 	// 			<div className="formGroup">
// 	// 				E-mail: <input name="email" type="mail" />
// 	// 			</div>
// 	// 			<button type="submit">Submit</button>
// 	// 		</form>
// 	// 	)
// 	// }
// }

// render(<Search />, document.getElementById('root'))

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