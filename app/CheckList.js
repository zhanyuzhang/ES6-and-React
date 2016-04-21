import React, {Component} from "react";

class CheckList extends Component {
	render() {
		let arr = this.props.tasks || [];
		let tasks = arr.map((task) => (
			<li className="checklist__task">
				<input type="checkbox" defaultChecked={task.done} id={task.id}/>
				<label htmlFor={task.id}> {task.name}</label>
				<a href="#" className="checklist__task--remove"  />
			</li>
		));

		return (
			<div className="checklist">
				<ul>{tasks}</ul>
			</div>
		)
	}
}

export default CheckList;