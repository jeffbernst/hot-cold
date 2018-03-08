import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

	onSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.textInput.value.trim());
		this.textInput.value = '';
	}

	render() {
		return (
			<form className="guess-form" onSubmit={(event) => this.onSubmit(event)} >
				<input type="text" ref={input => this.textInput = input} />
				<button type="submit">Guess!</button>
			</form>
		);
	}
};