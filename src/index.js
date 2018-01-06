import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCb7XA6857qpeQ64M82AehbMq26o-nFYxU';

//Creating a component that is going to produce some html.
const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  )
}

//I will take this components generated HTML and put it on the page...pop it in the DOM.
//Make the component then show it on the page.

ReactDOM.render(<App />, document.querySelector('.container'));