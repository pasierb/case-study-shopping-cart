import { reject, isNil, prop, map } from 'ramda';
import api from './utils/api';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const REQUEST_PROMOTIONS = 'REQUEST_PROMOTIONS';
export const RECEIVE_PROMOTIONS = 'RECEIVE_PROMOTIONS';

export function addProductToCart(productId, quantity = 1) {
  return {
    type: ADD_PRODUCT_TO_CART,
    productId,
    quantity
  };
}

export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS
  };
}

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
}

export function fetchProducts() {
  return async function (dispatch) {
    dispatch(requestProducts());

    const products = await api.fetchProducts();
    const promotionIds = reject(isNil)(map(prop('promotionId'))(products));

    if (promotionIds.length) {
      await dispatch(fetchPromotions());
    }
    
    return dispatch(receiveProducts(products));
  }
}

export function requestPromotions() {
  return {
    type: REQUEST_PROMOTIONS
  };
}

export function receivePromotions(promotions) {
  return {
    type: RECEIVE_PROMOTIONS,
    promotions
  };
} 

export function fetchPromotions() {
  return function (dispatch) {
    dispatch(requestPromotions());

    return api.fetchPromotions().then(promotions => {
      dispatch(receivePromotions(promotions));
    });
  }
}
