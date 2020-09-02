//component with the icons

import React from 'react';

import { Topping } from '../../hooks/order';

import { ReactComponent as Pepperoni } from '../../assets/toppingsIcons/pepperoni.svg';
import { ReactComponent as Mushrooms } from '../../assets/toppingsIcons/mushroom.svg';
import { ReactComponent as Onions } from '../../assets/toppingsIcons/onions.svg';
import { ReactComponent as Sausage } from '../../assets/toppingsIcons/sausage.svg';
import { ReactComponent as Bacon } from '../../assets/toppingsIcons/bacon.svg';
import { ReactComponent as ExtraCheese } from '../../assets/toppingsIcons/cheese.svg';
import { ReactComponent as BlackOlives } from '../../assets/toppingsIcons/olive.svg';
import { ReactComponent as GreenPeppers } from '../../assets/toppingsIcons/green-peppers.svg';
import { ReactComponent as Pineapple } from '../../assets/toppingsIcons/pineapple.svg';
import { ReactComponent as Spinach } from '../../assets/toppingsIcons/spinach.svg';

const ToppingsIcon: React.FC<{ topping: Topping }> = ({ topping }) => {
    const icons = {
        Pepperoni: <Pepperoni />,
        Mushrooms: <Mushrooms />,
        Onions: <Onions />,
        Sausage: <Sausage />,
        Bacon: <Bacon />,
        ExtraCheese: <ExtraCheese />,
        BlackOlives: <BlackOlives />,
        GreenPeppers: <GreenPeppers />,
        Pineapple: <Pineapple />,
        Spinach: <Spinach />,
    };

    return icons[topping];
};

export default ToppingsIcon;
