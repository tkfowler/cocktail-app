import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearState, randomDrink } from '../actions'

class DrinkList extends Component {
  componentWillMount() {
    this.props.clearState();
  }
  renderDrinks(){
    return _.map(this.props.drink.drinks, drink => {
      return(
        <div className="drink-list col-md-3" key={drink.idDrink}>
          <Link to={`/${drink.idDrink}`}>
            <h4>{drink.strDrink}</h4>
            <img src={drink.strDrinkThumb} />
          </Link>
        </div>
      )
    })
  }

  render() {
    // console.log(this.props);
    if (this.props.drink.drinks === null) {
      return(
        <div className="results">
          <h4>Drink(s) not found</h4>
          <img src={require("../images/no.jpg")}/>
        </div>
      )
    } if(!this.props.drink.drinks){
      return(<div></div>)
    } else {
      return (
        <div className="row">
          {this.renderDrinks()}
        </div>
      )
    }
  }
}

function mapStateToProps({ drink }) {
  return { drink };
}

export default connect(mapStateToProps, { clearState, randomDrink })(DrinkList);
