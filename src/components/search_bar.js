import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { searchDrinks, randomDrink } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchDrinks(this.state.term);
    this.setState({ term: '' })
    this.props.randomDrink();
  }

  render() {
    return (
      <div className="col-md-12 text-center">
        <form onSubmit={this.onFormSubmit} className="search-bar">
          <input
            value={this.state.term}
            onChange={this.onInputChange} />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchDrinks, randomDrink }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
