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
    <input 
    value={this.state.term}
    onChange={event => this.setState({ term: event.target.value })}/>
    </div>
  );
  }

}

export default SearchBar;