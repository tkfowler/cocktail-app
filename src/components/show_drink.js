import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchDrink } from '../actions';

class ShowDrink extends Component {
  componentDidMount(){
    let { id } = this.props.match.params;
    this.props.fetchDrink(id);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params !== nextProps.match.params) {
      let { id } = nextProps.match.params;
      this.props.fetchDrink(id)
    }
  }
  renderIngredients(){
    const d = this.props.drink[0];
    let a = {};
    for (let i = 1; i < 16; i++) {
      let ing = d['strIngredient' + i];
      let measure = d['strMeasure' + i];
      let img = "http://www.thecocktaildb.com/images/ingredients/"+ing+".png"
      if(ing === ""  || measure === "") {
        break;
      } else {
        a[i] = {ing:ing, measure:measure, img:img};
      }
    }
    return _.map(a, a => {
      return(
        <div className="col-md-4" key={a.ing}>
          <img src={a.img} />
          <p>{a.ing}</p>
          <p>{a.measure}</p>
        </div>
      )
    })
  }

  render() {
    if(!this.props.drink) {
      return <div className="drink"><h4>Loading...</h4></div>
    }
    const d = this.props.drink[0]
    return (
      <div className="drink">
        <div className="row">
          <div className="col-md-12">
            <h2>{d.strDrink}</h2>
            <p>{d.strInstructions}</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={d.strDrinkThumb} />
          </div>
          <div className="col-md-8">
            {this.renderIngredients()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ drink }, ownProps) {
  return { drink:drink[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchDrink })(ShowDrink);
