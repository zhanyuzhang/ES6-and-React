import React, {Component} from "react";
import List from "./List";
class KanbanBoard extends Component {
	render() {
		return (
			<div className="app">
				<List id="todo" title="待办" cards={
					this.props.cards.filter((card) => card.status === "todo")
				} />
				<List id="in-progress" title="进行中" cards={
					this.props.cards.filter((card) => card.status === "in-progress")
				} />
				<List id="done" title="已完成" cards={
					this.props.cards.filter((card) => card.status === "done")
				} />
			</div>
		)
	}
}

export default KanbanBoard;
