import React from "react";

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    // console.log(e.target)
    const { name, value } = e.target;
    this.setState({
      event: value
    });
  }

  handleSubmit(e) {
    // alert("your search has been submitted!", this.state.event);
    e.preventDefault(); //this.state.search is passing movie array!
    // console.log(this.state.event);
    this.props.getEvents(this.state.event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Event:
          <input
            name="event"
            value={this.state.event}
            onChange={this.handleInput}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchItem;
