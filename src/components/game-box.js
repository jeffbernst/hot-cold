import React from 'react';

import Temperature from './temperature';
import GuessInput from './guess-input';
import GuessCounter from './guess-counter';
import GuessHistory from './guess-history';
import GuessButton from './guess-button';

import './game-box.css'

export default function GameBox(props) {
	return (
		<div className="box">
			<Temperature />
			<GuessInput />
			<GuessButton />
			<GuessCounter />
			<GuessHistory />
		</div>
	);
};