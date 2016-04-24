import React, {Component, PropTypes} from "react";
import List from "./List";
class KanbanBoard extends Component {
	render() {
		return (
			<div className="app">
				<List id="todo" title="待办" taskCallbacks={this.props.taskCallbacks} cards={
					this.props.cards.filter((card) => card.status === "todo")
				} />
				<List id="in-progress" title="进行中" taskCallbacks={this.props.taskCallbacks} cards={
					this.props.cards.filter((card) => card.status === "in-progress")
				} />
				<List id="done" taskCallbacks={this.props.taskCallbacks} title="已完成" cards={
					this.props.cards.filter((card) => card.status === "done")
				} />
			</div>
		)
	}
}

KanbanBoard.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object),
	taskCallbacks: PropTypes.object
}

export default KanbanBoard;
