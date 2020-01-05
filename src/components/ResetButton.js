import React from 'react';
import '../index.css';

function ResetButton({initialState, setState}) {
  return (
    <button className="reset-button" onClick={() => setState({...initialState})}>
      Reset
    </button>
  )
}

export default ResetButton;