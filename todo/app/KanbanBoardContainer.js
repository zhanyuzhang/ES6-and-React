import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import "whatwg-fetch";
import 'babel-polyfill';
import update from 'react-addons-update';
import KanbanBoard from "./KanbanBoard";

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
	'Content-type': 'application/json',
	'Authorization': 'zzy2224'
};

var i = 100;

class KanbanBoardContainer extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			cards: []
		};
	}

	componentDidMount() {
		fetch(API_URL + '/cards', {headers: API_HEADERS})
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({cards: responseData});
		})
		.catch((error) => {
			console.log("Error fetching and parsing data", error);
		});
	}

	addTask(cardId, taskName) {
		let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);
		let newTask = {id: Date.now(), name: taskName, done: false};
		let prevState = this.state; //保存前一个状态，失败回滚
		let nextState = update(this.state.cards, {
			[cardIndex]: {
				tasks: {$push: [newTask]}
			}
		});

		this.setState({cards: nextState});

		fetch(`${API_URL}/cards/${cardId}/tasks`, {
			method: 'post',
			headers: API_HEADERS,
			body: JSON.stringify(newTask)
		})
		.then((response) => {
			//抛出错误 
			if(!response.ok) {
				throw new Error("Server responsed wasn't OK");
			}
			return response.json();
		})
		//请求成功后，还要改变原来的ID,重新渲染
		.then((responseData) => {
			newTask.id = responseData.id;
			this.setState({cards: nextState});
		})
		.catch((error) => {
			console.error("Fetch error:", error);
			this.setState(prevState);
		}) ;


	}

	deleteTask(cardId, taskId, taskIndex) {

		let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
		let prevState = this.state;
		let nextState = update(this.state.cards, {
			[cardIndex]: {
				tasks: {$splice: [[taskIndex, 1]]}
			}
		});

		this.setState({cards: nextState});

		fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
			method: "delete",
			headers: API_HEADERS
		})
		.then((response) => {
			if(!response.ok) {
				throw new Error("Server response wasn't Ok");
			}
		})
		.catch((error) => {
			console.error("Fetch error: ", error);
			this.setState(prevState);
		});
	}

	toggleTask(cardId, taskId, taskIndex) {
		let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);
		let newDoneValue;
		let prevState = this.state;
		let nextState = update(this.state.cards, {
			[cardIndex]: {
				tasks: {
					[taskIndex]: {
						done: {$apply: (done) => {
							newDoneValue = !done;
							return newDoneValue;
						}}
					}
				}
			}
		});

		this.setState({cards: nextState});

		fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
			method: "put",
			headers: API_HEADERS,
			body: JSON.stringify({done: newDoneValue})
		})
		.then((response) => {
			if(!response.ok) {
				throw new Error("Server response wasn't Ok");
			}
		})
		.catch((error) => {
			console.error("Fetch error: ", error);
			this.setState(prevState);
		});;
	}

	render() {
		return <KanbanBoard cards={this.state.cards} 
							    taskCallbacks={{
							    	toggle: this.toggleTask.bind(this),
							    	delete:  this.deleteTask.bind(this),
							    	add: this.addTask.bind(this)
							    }} />
	}

}

export default KanbanBoardContainer;