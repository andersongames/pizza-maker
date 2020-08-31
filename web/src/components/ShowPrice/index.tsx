//component to return the price of the pizza

import React from 'react';

import { Price } from '../../hooks/order';

import './styles.scss'

const ShowPrice: React.FC<Price> = ({ priceToShow }) => {
    return (
        <div className="show-price">
            <h2>
                Price: $
                {priceToShow}
            </h2>
        </div>
    );
}

export default ShowPrice;
