import React from 'react';
import PropTypes from 'prop-types';
import { Decimal } from 'decimal.js';

function ProductListItem(props) {
  const { product, promotion, onAddProduct } = props;
  const add = () => onAddProduct(product.id, 1)

  return (<tr>
    <td>
      {product.name}
      {promotion && (
        <span className="tag is-warning">{promotion.name}</span>
      )}
    </td>
    <td className="has-text-right">${Decimal(product.price).toFixed(2)}</td>
    <td>
      <a onClick={add}>
        <i className="fa fa-cart-plus" />
      </a>
    </td>
  </tr>);
}

ProductListItem.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  promotion: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}

export default ProductListItem;
