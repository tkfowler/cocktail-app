import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { searchType, randomDrink } from '../actions';

class List extends Component {
  chooseType(type){
    this.props.searchType(type);
    this.props.randomDrink();
  }

  renderList(){
    const types = ['Vodka', 'Tequila', 'Gin', 'Rum', 'Brandy', 'Vermouth', 'Whiskey']
    return _.map(types, type => {
      return (
        <li key={type}><Link to={"/"} onClick={this.chooseType.bind(this, type)}>{type}</Link></li>
      )
    })
  }

  render() {
    return(
      <ul className="dropdown-menu">{this.renderList()}</ul>
    )
  }
}

export default connect(null, { searchType, randomDrink })(List)
