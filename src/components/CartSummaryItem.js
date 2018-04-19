import React from 'react';
import PropTypes from 'prop-types';
import Decimal from 'decimal.js';

function CartSummaryItem(props) {
  const { value, label } = props;

  return (<div className="columns is-mobile">
    <div className="column has-text-weight-bold">{label}</div>
    <div className="column is-narrow has-text-right">
      ${value.toFixed(2)}
    </div>
  </div>);
}

CartSummaryItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Decimal).isRequired
};

export default CartSummaryItem;
