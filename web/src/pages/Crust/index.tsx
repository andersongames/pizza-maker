import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ShowPrice from '../../components/ShowPrice';
import useOrder, { Crust } from '../../hooks/order';

import './styles.scss';

function PickCrust() {

    const { prices, price, crust, handlePrice, handleCrust, reset } = useOrder();
    const [currentPrice, setCurrentPrice] = useState(price);

    function handleChangeCrust(crust: Crust) {
        handleCrust(crust);
        if (currentPrice > price)
            setCurrentPrice(price);

        setCurrentPrice(price + prices.crust[crust]);
        //console.log(crust, price);
    }

    return (
        <div id="crust-content">
            <Header />
            <h3>Pick the Crust:</h3>

            <div className="crust-buttons">
                <div className="crust-button-wrapper">
                    <input type="radio" name="crust" onChange={() => handleChangeCrust('thin')} />
                    <label>Thin (+$2)</label>
                </div>
                <div className="crust-button-wrapper">
                    <input type="radio" name="crust" onChange={() => handleChangeCrust('thick')} />
                    <label>Thick (+$4)</label>
                </div>
            </div>

            <ShowPrice priceToShow={currentPrice} />

            <div className="nav-buttons">
                <Link to="/" className="button">
                    <button type="button" onClick={reset}>
                        <span>Cancel</span>
                    </button>
                </Link>

                {/*quick trick to force user back to home page in case price was lost (page reload)*/}
                <Link to={price === 0 ? "/" : "/Toppings"} onClick={!crust ? (event) => event.preventDefault() : () => handlePrice(currentPrice)}>
                    <button type="button" disabled={!crust ? true : false}>
                        <span>Next</span>
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default PickCrust;
