import React from 'react';
import PropTypes from 'prop-types';
import CartSummaryItem from './CartSummaryItem';
import { Decimal } from 'decimal.js';
import { mergeWith } from 'ramda';
import { itemValue } from '../utils/cart';

function getItemsValue(items) {
  return items.map(({ product, quantity, promotion = {}}) => {
    return {
      product,
      promotion,
      ...itemValue({
        quantity,
        price: product.price,
        freeAmountThreshold: promotion.freeAmountThreshold,
        freeAmountValue: promotion.freeAmountValue
      })
    }
  });
}

function CartSummary(props) {
  const { items = [] } = props;
  const itemsValue = getItemsValue(items);
  const { base, total, discount } = itemsValue.reduce((acc, { base, total, discount }) => {
    return mergeWith(Decimal.add.bind(Decimal), acc, { base, total, discount })
  }, { base: 0, total: 0, discount: 0 });

  return (<div>
    <CartSummaryItem value={base} label={`Subtotal ${items.length} item(s)`} />
    <CartSummaryItem value={discount} label="Discount" />
    {discount < 0 && itemsValue.filter(({ discount }) => discount < 0).map(itemValue => (
      <div key={itemValue.product.id} className="columns is-mobile">
        <div className="column is-1"></div>
        <div className="column has-text-left">
          {itemValue.product.name} - {itemValue.promotion.name}
        </div>
        <div className="column has-text-right">
          ${itemValue.discount.toFixed(2)}
        </div>
      </div>
    ))}
    <CartSummaryItem value={total} label="Total" className="total" />
  </div>);
}

CartSummary.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    promotion: PropTypes.shape({
      freeAmountThreshold: PropTypes.number.isRequired,
      freeAmountValue: PropTypes.number.isRequired
    })
  }))
};

export default CartSummary;
