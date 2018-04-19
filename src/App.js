import React from 'react';
import Cart from './containers/ActiveCart';
import Products from './containers/AvailableProducts';

function App() {
  return (<div className="columns">
    <div className="column product-list-wrapper">
      <div className="box">
        <Products />
      </div>
    </div>
    <div className="column cart-wrapper">
      <div className="box">
        <Cart />
      </div>
    </div>
  </div>);
}

export default App;
