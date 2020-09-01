//control all the order values and provides data

import { useState } from 'react';

interface Prices {
  size: {
    large: number;
    medium: number;
    small: number;
  };
  crust: {
    thick: number;
    thin: number;
  };
}

export type Price = {
  priceToShow: number;
}

export type Size = 'large' | 'medium' | 'small';
export type Crust = 'thin' | 'thick';
export type Topping =
  | 'Pepperoni'
  | 'Mushrooms'
  | 'Onions'
  | 'Sausage'
  | 'Bacon'
  | 'ExtraCheese'
  | 'ExtraCheese'
  | 'BlackOlives'
  | 'GreenPeppers'
  | 'Pineapple'
  | 'Spinach';

//variables to keep states update
let totalPrice = 0; //this price is only set when the user advance to the next page
let currentSize = '';
let currentCrust = '';
let currentToppings: Topping[] = [];
let maxToppings = 5;

function useOrder() {
  const [price, setPrice] = useState(totalPrice);
  const [size, setSize] = useState(currentSize);
  const [crust, setCrust] = useState(currentCrust);
  const [toppings, setToppings] = useState(currentToppings);

  const [maxNumberOfToppings, setMaxNumberOfToppings] = useState(maxToppings);

  //arrays with data to be provided to the pages
  const [prices] = useState<Prices>({
    size: {
      large: 12,
      medium: 10,
      small: 8,
    },
    crust: {
      thick: 4,
      thin: 2,
    },
  });

  const [toppingsArray] = useState<Topping[]>([
    'Pepperoni',
    'Mushrooms',
    'Onions',
    'Sausage',
    'Bacon',
    'ExtraCheese',
    'BlackOlives',
    'GreenPeppers',
    'Pineapple',
    'Spinach',
]);

//functions to set states according users choices
  function handlePrice(price: number) {
    totalPrice = price;
  }

  function handleSize(size: Size) {
    currentSize = size;
    setSize(currentSize);

    switch (size) {
      case 'small':
        maxToppings = 5;
        break;
      case 'medium':
        maxToppings = 7;
        break;
      case 'large':
        maxToppings = 9;
        break;
    }

    setMaxNumberOfToppings(maxToppings);
  }

  function handleCrust(crust: Crust) {
    currentCrust = crust;
    setCrust(currentCrust);
  }

  function handleToppings(topping: Topping) {
    const search = currentToppings.indexOf(topping)
  
    search === -1 ? currentToppings.push(topping) : currentToppings.splice(search, 1);

    setToppings(currentToppings);
  }

  function reset() {
    totalPrice = 0;
    currentSize = '';
    currentCrust = '';
    currentToppings = [];
    maxToppings = 5;
  }

    return {
      price,
      size,
      crust,
      toppings,
      prices,
      maxNumberOfToppings,
      toppingsArray,
      handleSize,
      handlePrice,
      setPrice,
      handleCrust,
      handleToppings,
      reset,
    };
  }

  export default useOrder;
