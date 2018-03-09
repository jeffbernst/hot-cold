import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

	state = {
		inputValue: ''
	};

	onSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.inputValue.trim());
		this.setState({
			inputValue: ''
		})
	};

	handleChange = event => {
		this.setState({
			inputValue: event.target.value
		})
	};

	render() {
		return (
			<form className="guess-form" onSubmit={this.onSubmit} >
				<input type="text" value={this.state.inputValue} onChange={this.handleChange} />
				<button type="submit">Guess!</button>
			</form>
		);
	}
};