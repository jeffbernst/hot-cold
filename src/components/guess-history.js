import React from 'react';

import './guess-history.css';

export default function GuessHistory(props) {
	return (
		<div className="guess-history">
			{props.guessHistory.join(', ')}
		</div>
	);
};