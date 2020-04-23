import React from 'react';
import { ajax } from 'jquery';
import SearchItem from './SearchItem.jsx';
import EventsList from './EventsList.jsx';
import EditList from './EditList.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
    this.getEvents = this.getEvents.bind(this);
  }
componentDidMount() {
    ajax({
    type: 'GET',
    url: 'http://localhost:3000/events?_page=7&_limit=10',
    success: (events) => this.setState({ events }),
    error: (e) => console.log('error', e),
  });
}

getEvents(search) {
    ajax({
      type: 'GET',
      url: `http://localhost:3000/events?_page=7&_limit=10&q=${search}`,
      data: { search },
      success: (events) => this.setState({ events }),
      error: (e) => console.log('error', e),
    });
}
  render(){
    const { events } = this.state;
    return (
      <div>
      Search Historical events
      <SearchItem getEvents={this.getEvents} events={events} />
      <EditList events={events}/>
      <EventsList events={events}/>
      </div>
    )
  }
}

export default Search;
