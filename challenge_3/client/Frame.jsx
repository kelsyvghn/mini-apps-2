import React from 'react';


const Frame = ({ frameNumber, leftBox, rightBox, extraPoints, score }) => (
  <div className="frame">
    <div className="frame-number">{frameNumber}</div>
    <div className="frame-score">
      <div className="box-left">{leftBox}</div>
      <div className="box-right">{rightBox}</div>
      <div className="box-extra">{extraPoints}</div>
    </div>
    <div className="running-score">{!isNaN(score) && score}</div>
  </div>
);

export default Frame;