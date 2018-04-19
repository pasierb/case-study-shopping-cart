import React from 'react';
import PropTypes from 'prop-types';
import { Decimal } from 'decimal.js';

function CartItemRow(props) {
  const { product, quantity, onChangeItemQuantity } = props;
  const value = Decimal.mul(product.price, quantity);

  const add = () =>  onChangeItemQuantity(product.id, 1);
  const remove = () =>  onChangeItemQuantity(product.id, -1);

  return (<tr>
    <td>{product.name}</td>
    <td>
      <div className="columns is-mobile">
        <div className="column is-narrow">
          <a onClick={remove}>
            <i className="fa fa-minus" />
          </a>
        </div>
        <div className="column has-text-right">
          {quantity}
        </div>
        <div className="column is-narrow">
          <a onClick={add}>
            <i className="fa fa-plus" />
          </a>
        </div>
      </div>
    </td>
    <td className="has-text-right">${value.toFixed(2)}</td>
  </tr>);
}

CartItemRow.propTypes = {
  quantity: PropTypes.number.isRequired,
  onChangeItemQuantity: PropTypes.func
};

export default CartItemRow;
