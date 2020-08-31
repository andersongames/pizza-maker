import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import PizzaInfo from '../../components/PizzaInfo';
import useOrder from '../../hooks/order';

import './styles.scss';

function Finished() {
    const { reset } = useOrder();

    return (
        <div id="page-finished">
            <Header />
            <h2>Order Finished!</h2>
            <h3>Now just wait for the delivery</h3>

            <PizzaInfo />

            <div className="nav-buttons">
                <Link to="/" className="button">
                    <button type="button" onClick={reset}>
                        <span>Order one more!</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Finished;
