import { connect } from 'react-redux';
import { addProductToCart, fetchProducts } from '../actions';
import ProductList from '../components/ProductList';

const mapStateToProps = ({ productsById, promotionsById }) => {
  return {
    products: Object.values(productsById),
    promotions: promotionsById
  };
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  onAddProduct: (productId, quantity) => dispatch(addProductToCart(productId, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
