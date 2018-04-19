const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

const productsById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS: {
      return action.products.reduce((acc, product) => ({
        [product.id]: product,
        ...acc
      }), state);
    }
    default: {
      return state;
    }
  }
}

export default productsById;
