import { combineReducers } from 'redux'
import productsById from './productsById';
import promotionsById from './promotionsById';
import cart from './cart';

export default combineReducers({
  cart,
  productsById,
  promotionsById
});
