import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { randomDrink } from '../actions';

class RandomDrink extends Component {
  componentDidMount() {
    this.props.randomDrink();
  }
  render(){
    let rand = this.props.random.random;
    if (rand === undefined) {
      return <Link to={"#"}>Randomize</Link>
    } else {
      rand = rand[0].idDrink
      return(
        <Link to={`/${rand}`} onClick={this.props.randomDrink}>Randomize</Link>
      )
    }
  }
}

function mapStateToProps({ drink }) {
  return { random:drink  }
}
export default connect(mapStateToProps, { randomDrink })(RandomDrink);
