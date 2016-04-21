import React, {Component} from "react";
import CheckList from "./CheckList";
import marked from "marked";

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
					<CheckList cardId={this.props.id} tasks={this.props.tasks} />
				</div>
			)
		}

		// getInitialState: function()
		return (
			<div className="card">
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

export default Card;