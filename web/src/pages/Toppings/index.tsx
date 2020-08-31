import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ShowPrice from '../../components/ShowPrice';
import useOrder, { Topping } from '../../hooks/order';
import ToppingItem from '../../components/ToppingItem';

import './styles.scss';

function Toppings() {

    const { price, size, toppings, maxNumberOfToppings, toppingsArray, handlePrice, handleToppings, reset } = useOrder();
    const [currentPrice, setCurrentPrice] = useState(price); //totalPrice will only be updated when user go to next page, in current page the user will see this variable as price
    const [currentNumberOfToppings, setCurrentNumberOfToppings] = useState(toppings.length);
    const [allowedFreeToppings] = useState(3);

    const [allowedMaxNumberOfToppings] = useState(maxNumberOfToppings);

    //functions to handle user choices
    function handleChangeToppings(topping: Topping) {
        handleToppings(topping);
        handleToppingsPrice();
    }

    function handleToppingsPrice() {
        if (toppings.length <= allowedFreeToppings)
            setCurrentPrice(price)
        else
            setCurrentPrice(price + ((toppings.length - allowedFreeToppings) * 0.5))

        setCurrentNumberOfToppings(toppings.length)
        //console.log(size, toppings, currentNumberOfToppings, allowedMaxNumberOfToppings);
    }

    return (
        <div id="page-toppings">

            <div className="toppings-content">
                <Header />

                <div className="texts">
                    <h3>Pick the Toppings:</h3>
                    <p>You can choose up to three free toppings, above that you pay $0.50 for each extra</p>
                    <p>Maximum toppings for the <strong>{size}</strong> size is <strong>{allowedMaxNumberOfToppings}</strong></p>
                </div>
                <div className="toppings-checkboxes"> {/*return a checkbox for each topping in toppingsArray*/}
                    {toppingsArray.map((toppings, index) => {
                        return (
                            <div className="topping-checkbox" key={toppings}>
                                <ToppingItem topping={toppings} />
                                <div className="checkbox-wrapper">
                                    <input
                                        type="checkbox"
                                        id={toppings}
                                        value={toppings}
                                        onChange={() => handleChangeToppings(toppingsArray[index])}
                                    />
                                    <label htmlFor={toppings}>{toppings}</label>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <ShowPrice priceToShow={currentPrice} />

                <div className="nav-buttons">
                    <Link to="/" className="button">
                        <button type="button" onClick={reset}>
                            <span>Cancel</span>
                        </button>
                    </Link>

                    {/*quick trick to force user back to home page in case price was lost (page reload)*/}
                    <Link to={price === 0 ? "/" : "/Checkout"} 
                        onClick={currentNumberOfToppings <= allowedMaxNumberOfToppings
                            ? () => handlePrice(currentPrice)
                            : (event) => event.preventDefault()}>

                        <button type="button" disabled={currentNumberOfToppings <= allowedMaxNumberOfToppings ? false : true}>
                            <span>Next</span>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Toppings;
