import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import "whatwg-fetch";

class ContactsAppContainer extends Component {

	constructor() {
		super();
		this.state = {
			contacts: []
		}
	}

	componentDidMount() {
		fetch("./contacts.json")
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({contacts: responseData});
			})
			.catch((error) => {
				console.log("Error fetching and parsing data", error);
			});
	}

	render() {
		return (
			<ContactsApp  contacts={this.state.contacts} />
		)
	}
}

class ContactsApp extends Component {

	constructor() {
		super();
		this.state={
			filterText: ""
		};
	}	

	handleUserInput(searchTerm) {
		this.setState({filterText: searchTerm});
	}

	render() {

		let style = {
			padding: 20
		};

		return(
			<div style={style} >
				<SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}  />
				<ContactList contacts={this.props.contacts} filterText={this.state.filterText} />
			</div>
		)
	}
}

ContactsApp.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object)
};
// ContactsApp.propTypes = {
// 	contacts: PropTypes.arrayOf(PropTypes.object)
// }

//SearchBar
class SearchBar extends Component {

	handleChange(event) {
		this.props.onUserInput(event.target.value);
	}

	render() {
		let style = {
			border: "1px dashed gray",
			padding: 5,
			width: 300
		}

		return <input style={style} type="search" placeholder="search" value={this.props.filterText} onChange={this.handleChange.bind(this)} />
	}
}

SearchBar.propTypes = {
	filterText: PropTypes.string.isRequired
}

//ContactList
class ContactList extends Component {
	render() {
		let filteredContacts = this.props.contacts.filter(
			(contact) => contact.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
		)
		return (
			<ul>
				{filteredContacts.map((contact) => < ContactItem key={contact.email} 	name={contact.name} email={contact.email} />)}
			 </ul>
		)
	}
}

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object)
}

//ContactItem
class ContactItem extends Component {
	render() {
		let style = {
			margin: "5px 0"
		}
		return <li style={style} key= {this.props.email} > {this.props.name} - {this.props.email} </li>
	}
}
ContactItem.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired
};


render(<ContactsAppContainer />, document.getElementById('root'));

