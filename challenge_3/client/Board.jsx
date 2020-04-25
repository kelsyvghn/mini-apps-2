import React, { useState } from 'react';
import Frame from './Frame.jsx';

const Board = (score) => {
  const { leftBox, rightBox, extraPoints, cumulative} = this.props;
  return (
    <div className="board">
      <h1>Kelsy's Bowling</h1>
      {
        [...Array(10)].map(i => (
          <Frame
          key={i}
          frameNumber={i + 1}
          leftBox={score[i].leftBox}
          rightBox={score[i].rightBox}
          extraBox={score[i].extraPoints}
          score={score[i].cumulative}
          />
        ))
      }
    </div>
  )
}



export default Board;