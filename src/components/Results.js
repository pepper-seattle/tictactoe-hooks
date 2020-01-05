import React from 'react';

// There is probably a better way to do this
function Results(props) {
  const {setState, squares, winner} = props;
  const winCombos = [
    [0, 1, 2], 
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
  ];
  let xSquares = [];
  let oSquares = [];
  
  squares.forEach((i, index) => {
    if(i === 'X'){
      xSquares.push(index);
    }else if(i === 'O'){
      oSquares.push(index);
    }
  });

  if(xSquares.length > 2 || oSquares.length > 2) {
    winCombos.forEach((combo) => {
      if(winner === ''){
        if(xSquares.includes(combo[0]) && xSquares.includes(combo[1]) && xSquares.includes(combo[2])) {
          setState(prevState => ({...prevState, winner: 'X'}));
        }else if(oSquares.includes(combo[0]) && oSquares.includes(combo[1]) && oSquares.includes(combo[2])) {
          setState(prevState => ({...prevState, winner: 'O'}));
        }else if(xSquares.length === 5 && winner !== 'X') {
          setState(prevState => ({...prevState, winner: 'Nobody'}));
        }
      }
    })
  }

  return (
    <div>
      {winner !== '' ? 
        <div className="winner-text">
           <h1>The Winner Is: </h1>
           <span className='winner-value'>{winner}</span>
        </div>
        : ''
      }
    </div>
  )
}

export default Results;