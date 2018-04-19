import { filter, uniq } from 'ramda';
import { ADD_PRODUCT_TO_CART } from '../actions';

const initialState = {
  productIds: [],
  quantityByProductId: {},
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const quantityByProductId = filter(quantity => quantity > 0, {
        ...state.quantityByProductId,
        [action.productId]: (state.quantityByProductId[action.productId] || 0) + action.quantity
      });

      return {
        quantityByProductId,
        productIds: uniq([
          ...state.productIds,
          action.productId
        ]).filter(id => quantityByProductId[id])
      };
    }
    default: {
      return state;
    }
  }
}

export default cart;
