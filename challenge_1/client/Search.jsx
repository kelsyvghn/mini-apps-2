import React from 'react';
import { ajax } from 'jquery';
import SearchItem from './SearchItem.jsx';
import EventsList from './EventsList.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
    this.getEvents = this.getEvents.bind(this);
  }
componentDidMount() {
  // let search = 'Pilgrims';
  this.getEvents();
}

getEvents(search) {
  if (search === undefined) {
    ajax({
      type: 'GET',
      url: 'http://localhost:3000/events?_page=7&_limit=10',
      data: { search },
      success: (events) => this.setState({ events }),
      error: (e) => console.log('error', e),
    });
  } else {
    ajax({
      type: 'GET',
      url: `http://localhost:3000/events?_page=7&_limit=10&q=${search}`,
      data: { search },
      success: (events) => this.setState({ events }),
      error: (e) => console.log('error', e),
    });
  }
}
  render(){
    const { events } = this.state;
    return (
      <div>
      Search Historical events
      <SearchItem getEvents={this.getEvents} events={events} />
      <EventsList events={events}/>
      </div>
    )
  }
}

export default Search;
