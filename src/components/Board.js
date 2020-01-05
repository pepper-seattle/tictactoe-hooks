import React from 'react';
import '../index.css';

import ResetButton from './ResetButton';
import Square from './Square';

function Board(props) {
  const {activePlayer, initialState, isXNext, setState, squares} = props;

  function handleClick(props) {
    const {i} = props; 
    const nextSquares = squares.slice()
    if(squares[i] === null) {
      nextSquares[i] = activePlayer;
      setState(prevState => ({...prevState, isXNext: !isXNext, squares: nextSquares}));
    }else{
      alert(`This square has already been filled by ${squares[i]}`)
    }
  }

  function renderSquare(i) {
    return <Square 
      value={squares[i]}
      onClick={() => handleClick({i, squares})}
      squares={squares}
    />;
  }

  return (
    <div>
      <div className="status">{`Next player: ${activePlayer}`}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <ResetButton initialState={initialState} setState={setState} />
    </div>
  );
}

export default Board;