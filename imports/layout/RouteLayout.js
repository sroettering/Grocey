import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage';
import AppLayout from './AppLayout';

const RouteLayout = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/start' component={ LandingPage } />
                <Route path='/' component={ AppLayout } />
            </Switch>
        </Router>
    );
};

export default RouteLayout;