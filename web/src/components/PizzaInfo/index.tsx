//component will return pizza infos

import React from 'react';

import useOrder from '../../hooks/order';
import ShowPrice from '../../components/ShowPrice';

import './styles.scss';

function PizzaInfo() {
    const { price, size, crust, toppings } = useOrder();

    return (
        <div className="pizza-info">
            <div className="info-wrapper">
                <strong>Size:&nbsp;</strong>
                <p>{size}</p>
            </div>

            <div className="info-wrapper">
                <strong>Crust:&nbsp;</strong>
                <p>{crust}</p>
            </div>

            <div className="toppings-wrapper">
                <strong>Toppings:</strong>
                {
                    toppings.map(toppings => {
                        return (
                            <p key={toppings}>{toppings}</p>
                        );
                    })
                }
            </div>

            <div className="info-wrapper">
                <ShowPrice priceToShow={price} />
            </div>
        </div>
    );
}

export default PizzaInfo;
