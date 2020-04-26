import React from 'react';

const Logic = ({ handleRoll, pinsUp }) => {
  return (
    <div className="logic">
    <h3>Player 1's Current Bowl</h3>
    <div className="left">
      {[...Array(pinsUp + 1)].map((o, i) => (
        <button key={i} className="roll" onClick={() => handleRoll(i)}>
          {i}
        </button>
      ))}
    </div>
    <div className="right">
    </div>
  </div>
  )
}

export default Logic;