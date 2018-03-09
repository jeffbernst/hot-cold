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

	updateOnSubmit = currentGuess => {
		console.log('number: ', this.state.number);

		if (this.state.number.toString() === currentGuess)
			this.resetGame();

		else {
			const hotOrCold = (Math.abs(this.state.number - currentGuess) < 10) ? 'hot' : 'cold';
			const currentCount = this.state.guessCounter + 1;

			this.setState(state => ({
				guessCounter: currentCount,
				temperature: hotOrCold,
				guessHistory: [...state.guessHistory, currentGuess]
			}))
		}
	};

	render() {
		return (
			<div className="box">
				<Temperature temperature={this.state.temperature} />
				<GuessForm guessInput={this.state.guessInput} onSubmit={this.updateOnSubmit} />
				<GuessCounter guessCounter={this.state.guessCounter} />
				<GuessHistory guessHistory={this.state.guessHistory} />
			</div>
		);
	}
};