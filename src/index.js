import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCb7XA6857qpeQ64M82AehbMq26o-nFYxU';

//Creating a component that is going to produce some html.
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {videos: []};
    
    YTSearch({ key: API_KEY, term: 'beyonce' },(videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
      <SearchBar />
      </div>
    );
  }
}

//I will take this components generated HTML and put it on the page...pop it in the DOM.
//Make the component then show it on the page.

ReactDOM.render(<App />, document.querySelector('.container'));