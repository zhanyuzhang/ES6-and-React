import React, {Component, PropTypes} from "react";
import CheckList from "./CheckList";
import marked from "marked";

let titlePropType = (props, propName, componentName) => {
	if(props[propName]) {
		let value = props[propName];
		if(typeof value !== "string" || value.length > 80) {
			return new Error(` ${propName} in ${componentName} is longer than 80 `);
		}
	}
}

class Card extends Component {

	constructor() {
		super(...arguments);
		this.state = {
			showDetails: true
		};
	}

	toggleDetails() {
		this.setState({showDetails: !this.state.showDetails});
	}


	// getInitialState() {
	// 	return {
	// 		showDetails: false
	// 	}
	// }

	render() {

		let cardDetails;		
		if(this.state.showDetails) {
			cardDetails = (
				<div className="card__details">
					<span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
					<CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks} />
				</div>
			)
		}


		let sideColor = {
			position: "absolute",
			zIndex: 100,
			top: 0,
			left: 0,
			bottom: 0,
			width: 7,
			backgroundColor: this.props.color
		};



		// getInitialState: function()
		return (
			<div className="card">
				<div style={sideColor} />
				<div className={
					this.state.showDetails ? "card__title card__title--is-open" : "card__title"
				} onClick={this.toggleDetails.bind(this)}> 
					{this.props.title} 
				</div>
				{cardDetails}
			</div>
		);
	}
}


Card.propTypes = {
	id: PropTypes.number,
	title: titlePropType,
	description: PropTypes.string,
	color: PropTypes.string,
	tasks: PropTypes.arrayOf(PropTypes.object),
	taskCallbacks: PropTypes.object
}

export default Card;