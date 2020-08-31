//returns the icon according to the topping

import React from 'react';

import ToppingIcon from './toppingsIcons';
import { Topping } from '../../hooks/order';


const ToppingsItem: React.FC<{ topping: Topping }> = ({ topping }) => {
    return (
        <ToppingIcon topping={topping} />
    );
};

export default ToppingsItem;
