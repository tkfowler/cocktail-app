import axios from 'axios';

export const SEARCH_DRINKS = 'search_drinks';
export const FETCH_DRINK = 'fetch_drink';
export const CLEAR_STATE = 'clear_state';
export const RANDOM_DRINK = 'random_drink';
export const SEARCH_TYPE = 'search_type';

const ROOT_URL = 'http://www.thecocktaildb.com/api/json/v1/1';

export function searchDrinks(search) {
  const url = `${ROOT_URL}/search.php?s=${search}`;
  const request = axios.get(url)

  return {
    type: SEARCH_DRINKS,
    payload: request
  }
}

export function fetchDrink(id) {
  const request = axios.get(`${ROOT_URL}/lookup.php?i=${id}`)

  return {
    type: FETCH_DRINK,
    payload: request
  }
}

export function randomDrink(){
  const request = axios.get(`${ROOT_URL}/random.php`)

  return {
    type: RANDOM_DRINK,
    payload: request
  }
}

export function clearState(){
  return {
    type: CLEAR_STATE
  }
}

export function searchType(type){
  const request = axios.get(`${ROOT_URL}/filter.php?i=${type}`)

  return {
    type: SEARCH_TYPE,
    payload: request
  }
}
