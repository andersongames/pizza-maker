import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Crust from './pages/Crust';
import Toppings from './pages/Toppings';
import Checkout from './pages/Checkout';
import Finished from './pages/Finished';

function Routes() {
    return (
        <BrowserRouter>
            <Switch >
                <Route path='/' exact component={Home} />
                <Route path='/crust' component={Crust} />
                <Route path='/toppings' component={Toppings} />
                <Route path='/checkout' component={Checkout} />
                <Route path='/finished' component={Finished} />
                <Route path="/*" component = {Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
