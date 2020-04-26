import React from 'react';
import ReactDOM from 'react-dom';
import Logic from './Logic.jsx';
import PinSVG from './PinSVG.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      frameNum: 1,
      score: { leftBox: 0, rightBox: 0, extraPoints: 0, cumulative: 0},
      pinsUp: 10,
      turns: 0
    }
    // frame Num keeps track of which frame we're on
    // score keeps track of the cummulative score of the game
    // pinsUp keeps track of how many pins are up on that frame and needs to reset on each frame
    // reset keeps track of whether or not it's the second round (or third for the last roll) in the game and if pinsUp should reset, score should be added, and if frame humber should increment up
this.handleRoll = this.handleRoll.bind(this);
this.handleNewTurn = this.handleNewTurn.bind(this);
  }

  handleRoll(i){
   const previousScore = this.state.score.cumulative;
   const newScore = previousScore + i;
   const previousSet = this.state.pinsUp;
   const newSet = previousSet - i;
   const previousTurn = this.state.turns;
   const newTurn = previousTurn + 1;
   console.log(newSet)
    this.setState({
      score: { cumulative: newScore },
      pinsUps: newSet,
      turns: newTurn
    })
    this.handleNewTurn()
  }

  handleNewTurn(){
    const prevFrame = this.state.frameNum;
    const newFrame = prevFrame + 1;
    if (this.state.turns === 2){
      this.setState({
        turns: 0,
        pinsUp: 10,
        frameNum: newFrame
      })
    }
  }

  render() {
    const { frameNum, score, pinsUp, turns } = this.state;
    return(
      <div>
<h1>Kelsy's Bowling</h1>
<Logic pinsUp={pinsUp} handleRoll={this.handleRoll} />
      <h4>Current Player: 1</h4>
      <h5>Current Score: {this.state.score.cumulative}</h5>
      <h5>Current Frame: {frameNum}</h5>
      <h5>Current Turn In Frame: {turns}</h5>
      <div className="bowlingPins">
        <div className="topPins">
      <PinSVG /><PinSVG /><PinSVG /><PinSVG />
        </div>
        <div className="middlePins">
      <PinSVG /><PinSVG /><PinSVG />
        </div>
        <div className="lowerPins">
      <PinSVG /><PinSVG />
        </div>
        <div className="bottomPin">
      <PinSVG />
        </div>
      </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));