import { RECEIVE_PROMOTIONS } from '../actions';

const promotionsById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROMOTIONS: {
      return {
        ...state,
        ...action.promotions.reduce((acc, promo) => {
          acc[promo.id] = promo;

          return acc;
        }, {})
      };
    }
    default: {
      return state;
    }
  }
}

export default promotionsById;
