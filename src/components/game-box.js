import React from 'react';

import Temperature from './temperature';
import GuessForm from './guess-form';
import GuessCounter from './guess-counter';
import GuessHistory from './guess-history';

import './game-box.css'

export default class GameBox extends React.Component {
	state = {
		number: Math.floor((Math.random() * 100) + 1),
		temperature: 'cold',
		guessInput: '',
		guessCounter: 0,
		guessHistory: []
	};

	resetGame() {
		alert('you won!!!! :D');
		this.setState({
			number: Math.floor((Math.random() * 100) + 1),
			temperature: 'cold',
			guessInput: '',
			guessCounter: 0,
			guessHistory: []
		})
	}

	updateOnSubmit(currentGuess) {
		// update input state
		// push new guess into history
		// increment counter
		// update temperature
		// clear input
		console.log('number: ', this.state.number);
		console.log('guess: ', currentGuess);


		if (this.state.number.toString() === currentGuess)
			this.resetGame();
		else {
			let hotOrCold;
			let currentCount = this.state.guessCounter + 1;

			if (Math.abs(this.state.number - currentGuess) < 10)
				hotOrCold = 'hot';
			else hotOrCold = 'cold';

			this.setState({
				guessCounter: currentCount,
				temperature: hotOrCold,
				guessHistory: [...this.state.guessHistory, currentGuess]
			})
		}
	}

	render() {
		return (
			<div className="box">
				<Temperature temperature={this.state.temperature} />
				<GuessForm guessInput={this.state.guessInput}
									 onSubmit={currentGuess => this.updateOnSubmit(currentGuess)} />
				<GuessCounter guessCounter={this.state.guessCounter} />
				<GuessHistory guessHistory={this.state.guessHistory} />
			</div>
		);
	}
};