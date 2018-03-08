import React from 'react';

import './guess-counter.css';

export default function GuessCounter(props) {
	return (
		<div className="guess-counter">
			{props.guessCounter}
		</div>
	);
};