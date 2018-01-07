import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props) {
    super(props); //super calls the parent method of the component 
    this.state = { 
    term: ''
  };
    
  }
  render() {
    return (
      <div>
    <input onChange={event => this.setState({ term: event.target.value })}/>
    // Value of input is { this.state.term}
    </div>
  );
  }

}

export default SearchBar;