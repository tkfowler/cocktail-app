import { combineReducers } from 'redux';
import DrinkReducer from './reducer_drinks';

const rootReducer = combineReducers({
  drink:DrinkReducer,
});

export default rootReducer;
