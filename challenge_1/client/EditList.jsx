import React from 'react';
import { ajax } from 'jquery';
import EditItem from './EditItem.jsx'

class EditList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      description: ''
    }
    this.editList = this.editList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  editList(change) {
    console.log(change)
    ajax({
      type: 'put',
      url: `http://localhost:3000/event/${change.index}`,
      data: JSON.stringify({change}),
      contentType: 'application/json',
      success: change => console.log('this change has been posted: ', JSON.stringify(change)),
      error: e => console.log(e)
    })
  }

  handleChange(event) {
    // item to be edited
    // console.log('item to edit: ', event.target.value)
    this.setState({
      index: event.target.value
    });
  }
  handleInput(event){
    // edit to make
    // console.log('edit to be made: ', event.target.value)
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Your edit has been submitted: ' + this.state.description);
    const { index, description } = this.state;
    event.preventDefault();
    // will have to find item in list
    // and then save the change to its value
    let editToMake = { index, description }
    this.editList(editToMake)
  }

  render() {
    const { events } = this.props;
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>
        Item:
      <select name="index"value={this.state.index} onChange={this.handleChange}>
          {
            events.map(event => (
                <option key ={events.indexOf(event)} value={events.indexOf(event)}>{event.description.slice(0, 30)}</option>
                ))
              }
          </select>
      </label>
      <label>
        Edit:
          <textarea name="edit" type="text" value={this.state.description} onChange={this.handleInput} />
      </label>
      <input type="submit" value="Save" />
    </form>
          {/* <editList index={this.index}/> */}
      </div>
    )
  }
}

export default EditList;