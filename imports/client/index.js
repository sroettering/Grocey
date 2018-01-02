import React from 'react';
import { render } from 'react-dom';

import RouteLayout from '../layout/RouteLayout';

Meteor.startup(() => {
    render(<RouteLayout />, document.getElementById('react-root'));
});