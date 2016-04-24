import React, {Component, PropTypes} from "react";

class CheckList extends Component {

	checkInputKeyPress(evt) {
		if(evt.key.toLowerCase() === 'enter') {
			this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
			evt.target.value = '';
		}
	}

	render() {
		let arr = this.props.tasks || [];
		let tasks = arr.map((task, taskIndex) => {

			return <li key={task.id} className="checklist__task">
				<input type="checkbox" onChange={
					this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)
				} defaultChecked={task.done} id={task.id}/>

				<label htmlFor={task.id}> {task.name}</label>
				<a href="#" className="checklist__task--remove" onClick={
					this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)
				}  />
			</li>
		});

		return (
			<div className="checklist">
				<ul cardId={this.props.cardId}>{tasks}</ul>
				<input type="text" className="checklist--add-task" onKeyPress={this.checkInputKeyPress.bind(this)}  />
			</div>
		)
	}
}

CheckList.propTypes = {
	cardId: PropTypes.number,
	tasks: PropTypes.arrayOf(PropTypes.object),
	taskCallbacks: PropTypes.object
};

export default CheckList;