import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from './Chart.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: { labels:[], datasets:[{ label: '', data: []}],  }
    }
  }
componentDidMount(){
 axios.get('http://localhost:3000/bitcoin')
  .then(res => {
    this.setState({
      data: { labels: Object.keys(res.data.bpi), datasets: [ { label: 'Bitcoin Values', data: Object.values(res.data.bpi)} ] }
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

