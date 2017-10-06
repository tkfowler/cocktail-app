import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './search_bar';
import DrinkList from './drink_list';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="intro">
          <h1>What can I get you?</h1>
          <div className="row">
            <SearchBar />
          </div>
        </div>
        <DrinkList />
      </div>
    );
  }
}
