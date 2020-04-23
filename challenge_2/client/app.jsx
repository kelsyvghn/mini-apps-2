import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { ajax } from 'jquery';
import Chart from './Chart.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: { datasets:[90, 20, 11, 1], labels:['2020-03-23', '2020-03-24', '2020-03-25', '2020-03-26'] }
    }
  }
componentDidMount(){
 axios.get('http://localhost:3000/bitcoin')
  .then(res => {
    this.setState({
      data: { datasets: Object.values(res.data.bpi),labels: Object.keys(res.data.bpi) }
     })
  }).catch(err => {
    console.log('err!', err);
  })
}
  render(){
    return (
      <div>Bitcoin Values by Date
        <Chart data={this.state.data}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

