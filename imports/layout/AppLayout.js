import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ShoppingList from '../pages/ShoppingList';
import Navigation from '../components/Navigation';

const AppLayout = () => {
    return (
        <Router>
            <div className='app-wrapper full-page'>
                <main>
                    <Switch>
                        <Route path='/shoppinglist' component={ ShoppingList }/>
                    </Switch>
                </main>
                <Navigation/>
            </div>
        </Router>
    );
};

export default AppLayout;