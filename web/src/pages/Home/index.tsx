import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header'
import ShowPrice from '../../components/ShowPrice'
import useOrder, { Size } from '../../hooks/order';

import './styles.scss';

function Home() {

  const { size, price, prices, handleSize, handlePrice } = useOrder();
  const [currentPrice, setCurrentPrice] = useState(price); //about price: totalPrice will only be updated when user go to next page, in current page the user will see this variable as price

  handlePrice(0); //reset the price when come back to home page

  //functions to handle user choices
  function handleChangeSize(size: Size) {
    handleSize(size);
    if (currentPrice > price)
      setCurrentPrice(price);

    setCurrentPrice(price + prices.size[size]);
    //console.log(size, price, maxNumberOfToppings)
  }

  return (
    <div id="page-home">
      <Header />

      <h3>Pick the size:</h3>

      <div className="size-buttons">
        <div className="size-button-wrapper">
          <input type="radio" name="size" onChange={() => handleChangeSize('small')} />
          <label>Small ($8)</label>
        </div>

        <div className="size-button-wrapper">
          <input type="radio" name="size" onChange={() => handleChangeSize('medium')} />
          <label>Medium - ($10)</label>
        </div>

        <div className="size-button-wrapper">
          <input type="radio" name="size" onChange={() => handleChangeSize('large')} />
          <label>Large - ($12)</label>
        </div>
      </div>

      <ShowPrice priceToShow={currentPrice} />

      <div className="nav-buttons"> {/*user only can go to the next page after selecting one option*/}
        <Link to="/crust" onClick={!size ? (event) => event.preventDefault() : () => handlePrice(currentPrice)}>
          <button type="button" disabled={!size ? true : false}>
            <span>Next</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
