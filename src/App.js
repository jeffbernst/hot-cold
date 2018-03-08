import React, { Component } from 'react';
import GameBox from './components/game-box';
import GameTitle from './components/game-title';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<GameTitle />
        <GameBox />
      </div>
    );
  }
}

export default App;
