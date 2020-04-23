import React from 'react';
import { ajax } from 'jquery';
import EditItem from './EditList.jsx'

class EditList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemToEdit: 0,
      edit: ''
    }
    this.editList = this.editList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  editList(change) {
    ajax({
      type: 'post',
      url: 'http://localhost:3000/events',
      data: JSON.stringify({change}),
      contentType: 'application/json',
      success: change => console.log('this change has been posted: ', JSON.stringify(change)),
      error: e => console.log(e)
    })
  }

  handleChange(event) {
    // item to be edited
    // console.log('item to edit: ', event.target.value)
    this.setState({ itemToEdit: event.target.value });
  }
  handleInput(event){
    // edit to make
    // console.log('edit to be made: ', event.target.value)
    this.setState({edit: event.target.value});
  }

  handleSubmit(event) {
    alert('Your edit has been submitted: ' + this.state.edit);
    const { itemToEdit, edit } = this.state;
    event.preventDefault();
    // will have to find item in list
    // and then save the change to its value
    let editToMake = { itemToEdit, edit }
    // this.editList()
  }

  render() {
    const { events } = this.props;
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>
        Item:
      <select value={this.state.value} onChange={this.handleChange}>
          {
            events.map(event => (
                <option key ={events.indexOf(event)} value={events.indexOf(event)}>{event.description.slice(0, 30)}</option>
                ))
              }
          </select>
      </label>
      <label>
        Edit:
          <textarea value={this.state.value} onChange={this.handleInput} />
      </label>
      <input type="submit" value="Save" />
    </form>
          {/* <EditList itemToEdit={this.itemToEdit}/> */}
      </div>
    )
  }
}

export default EditList;