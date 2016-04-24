import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimationShoppingList extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			items: [
				{id: 1, name: "Milk"},
				{id: 2, name: 'Yogurt'},
				{id: 3, name: 'Orange Juice'}
			]
		}
	}

	handleChange(evt) {
		if(evt.key.toLowerCase() === 'enter') {
			let newItem = {id: Date.now(), name: evt.target.value};
			let newItems = this.state.items.concat(newItem);
			evt.target.value = '';
			this.setState({items: newItems});
		}
	}

	handleRemove(i) {
		let newItems = this.state.items;
		newItems.splice(i, 1);
		this.setState({items: newItems});
	}

	render() {

		let inputStyle = {
			padding: 5,
			width: 120,
			marginTop: 10
		};

		let itemStyle = {
			backgroundColor: "#fff",
			cursor: "pointer",
			display: "block",
			marginBottom: 3,
			padding: "8px 12px",
			width: 120
		}

		let shoppingItems = this.state.items.map((item, i) => (
			<div key={item.id}
				  className="item"
				  style={itemStyle}
				  onClick={this.handleRemove.bind(this, i)} >
			{item.name}
			</div>
		));

		return (
			<div>
				<ReactCSSTransitionGroup transitionName="example"
											transitionEnterTimeout={300}
											transitionLeaveTimeout={300}
											transitionAppear={true}
											transitionAppearTimeout={300} >
					{shoppingItems}
				</ReactCSSTransitionGroup>
				
				<input style={inputStyle} type="text" value={this.state.newItem} onKeyDown={this.handleChange.bind(this)} />
			</div>
		);
	}

}

render(<AnimationShoppingList />, document.getElementById('root'));