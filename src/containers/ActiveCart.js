import { connect } from 'react-redux';
import { addProductToCart } from '../actions';
import Cart from '../components/Cart';

const mapStateToProps = ({
  cart,
  productsById,
  promotionsById
}) => {
  return {
    items: cart.productIds.map(id => {
      const quantity = cart.quantityByProductId[id];
      const product = productsById[id];

      return {
        product,
        promotion: promotionsById[id],
        quantity
      }
    })
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeItemQuantity: (productId, quantity) => dispatch(addProductToCart(productId, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
