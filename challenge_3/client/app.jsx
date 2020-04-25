import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import Logic from './Logic.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      frameNum: 1,
      score: { leftBox: 0, rightBox: 0, extraPoints: 0, cumulative: 0},
      pinsUp: 10,
      reset: false
    }
    // frame Num keeps track of which frame we're on
    // score keeps track of the cummulative score of the game
    // pinsUp keeps track of how many pins are up on that frame and needs to reset on each frame
    // reset keeps track of whether or not it's the second round (or third for the last roll) in the game and if pinsUp should reset, score should be added, and if frame humber should increment up


  }

  shouldReset(){
   if (this.state.reset) {
     this.setState({

     })
   }
  };

  pinsUpNow(){

  }

  render() {
    return(
      <div>
        {/* <Logic /> */}
        <Board score={this.state.score} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));