import React from 'react';

const EventsList = ({ events }) => {
  return (
<div>{
  events.map(event => (
    <div key={event.index} event={event.description} >
     <h3>Year: {event.date}</h3>
     <h4>Description: {event.description}</h4>
     <h5>Location: {event.category2}</h5>
    </div>
  ))

  }</div>
  )
}

export default EventsList;