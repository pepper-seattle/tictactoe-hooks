import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Board from './components/Board';
import Results from './components/Results';

function Game() {
  const defaultSquares = Array(9).fill(null);
  const initialState = {
    isXNext: true,
    squares: defaultSquares,
    winner: ''
  };
  const [{isXNext, squares, winner}, setState] = useState(initialState);

  const activePlayer = isXNext ? 'X' : 'O';
  return (
    <div className="game">
      <div className="game-board">
        <Board 
          activePlayer={activePlayer}
          initialState={initialState}
          isXNext={isXNext}
          setState={setState}
          squares={squares}
        />
      </div>
      <div className="game-info">
        <Results
          setState={setState}
          squares={squares} 
          winner={winner}
        />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);