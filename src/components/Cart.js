import React from 'react';
import PropTypes from 'prop-types';
import CartItemsTable from './CartItemsTable';
import CartSummary from './CartSummary';

function Cart(props) {
  const { items = [], onChangeItemQuantity } = props;

  return (<div className="Cart">
    {items.length ? (<div>
      <div className="has-text-right">
        <a onClick={window.print} className="button">
          <i className="fa fa-print" />
         </a>
      </div>
      <CartItemsTable items={items} onChangeItemQuantity={onChangeItemQuantity} />
      <CartSummary items={items} />
    </div>) : (
      <p>No items in the cart</p>
    )}
  </div>);
};

Cart.propTypes = {
  onChangeItemQuantity: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default Cart;
