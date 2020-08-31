import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import PizzaInfo from '../../components/PizzaInfo';
import useOrder from '../../hooks/order';

import './styles.scss';

function Checkout() {
  const { price, reset } = useOrder();

  return (
    <div id="page-checkout">
      <div className="checkout-content">
        <Header />
        <h3>Check your pizza:</h3>

        <PizzaInfo />

        <div className="nav-buttons">
          <Link to="/" className="button">
            <button type="button" onClick={reset}>
              <span>Cancel</span>
            </button>
          </Link>

          <Link to={price === 0 ? "/" : "/Finished"} className="button">
            <button type="button">
              <span>Confirm</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
