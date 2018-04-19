import React from 'react';
import CartItemRow from './CartItemRow';

function CartItemsTable(props) {
  const { items = [], onChangeItemQuantity } = props;

  return (<table className="table is-fullwidth">
    <thead>
      <tr>
        <th>Product</th>
        <th className="has-text-right is-narrow">Quantity</th>
        <th className="has-text-right is-narrow">Value</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ product, quantity }) => (
        <CartItemRow key={product.id}
          onChangeItemQuantity={onChangeItemQuantity}
          product={product}
          quantity={quantity} />
      ))}
    </tbody>
  </table>);
}

export default CartItemsTable;