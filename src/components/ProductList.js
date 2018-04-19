import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from './ProductListItem';

function ProductList(props) {
  const {
    products = [],
    promotions = {},
    onAddProduct,
  } = props;
  const items = products.map(product => {
    return (<ProductListItem
      key={product.id}
      onAddProduct={onAddProduct}
      promotion={promotions[product.id]}
      product={product} />);
  });

  return (<div className="ProductList">
    {items.length ? (<table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Product</th>
          <th className="has-text-right is-narrow">Price</th>
          <th className="is-narrow"></th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>) : (<p>
      Loading
    </p>)}
  </div>);
}

ProductList.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })),
  promotions: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    freeAmountThreshold: PropTypes.number.isRequired,
    freeAmountValue: PropTypes.number.isRequired
  }))
}

export default ProductList;
