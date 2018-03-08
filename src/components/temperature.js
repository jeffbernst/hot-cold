import React from 'react';

import './temperature.css';

export default function Temperature(props) {
	return (
		<div className={props.temperature}>
			{props.temperature}
		</div>
	);
};