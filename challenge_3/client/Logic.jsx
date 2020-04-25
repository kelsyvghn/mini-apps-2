import React from 'react';

const Logic = ({ handleRoll, handleReset, pinsUp }) => {
  return (
    <div className="logic">
    <div className="left">
      {[...Array(pinsUp + 1)].map((o, i) => (
        <button key={i} className="roll" onClick={() => handleRoll(i)}>
          {i}
        </button>
      ))}
    </div>
    <div className="right">
      <div className="roll reset" onClick={() => handleReset()}>
        Reset Game {pinsUp}
      </div>
    </div>
  </div>
  )
}

export default Logic;