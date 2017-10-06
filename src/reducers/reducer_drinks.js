import _ from 'lodash';
import { FETCH_INGS, SEARCH_DRINKS, CLEAR_STATE, FETCH_DRINK, RANDOM_DRINK, SEARCH_TYPE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DRINK:
      return { ...state, [action.payload.data.drinks[0].idDrink]: action.payload.data.drinks};
    case SEARCH_DRINKS:
      return action.payload.data;
    case RANDOM_DRINK:
      return { ...state, random: action.payload.data.drinks};
    case CLEAR_STATE:
      return _.pick(state, 'random')
    case SEARCH_TYPE:
      return {...state, drinks:action.payload.data.drinks};
    default:
      return state;
  }
}
