/**
 * Implementing backend server for this scenario is an overkill at best,
 * so we are going to mock it.
 * 
 * To make it more "real world" scenario let's make some assumptions:
 * - we are dealing with REST API
 * - it's slow (response time 400ms)
 * - our REST API does not return associated objects
 * - products are in many-to-one relation to promotion (to avoid making up stacking logic)
 * - error handling will mud the waters so we'll conviniently ignore it here
 */

const products = [
  { id: 1, name: 'Papaya', price: 0.7, promotionId: 1 },
  { id: 2, name: 'Mango', price: 0.3, promotionId: null },
  { id: 3, name: 'Apple', price: 0.9, promotionId: null }
];

const promotions = [
  {
    id: 1,
    name: '3 for 2!',
    freeAmountThreshold: 3,
    freeAmountValue: 1
  }
];

export function fetchProducts() {
  return new Promise(resolve =>
    setTimeout(resolve.bind(null, products), 400)
  );
}

export function fetchPromotions() {
  return new Promise(resolve =>
    setTimeout(resolve.bind(null, promotions), 400)
  );
}

export default {
  fetchProducts,
  fetchPromotions
};
