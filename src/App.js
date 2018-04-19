import React from 'react';
import Cart from './containers/ActiveCart';
import Products from './containers/AvailableProducts';

function App() {
  return (<div className="columns">
    <div className="column">
      <div className="box">
        <Products />
      </div>
    </div>
    <div className="column">
      <div className="box">
        <Cart />
      </div>
    </div>
  </div>);
}

export default App;
