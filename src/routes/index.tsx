import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import DashBoard from '../pages/DashBoard/index';
// Switch vai garantir que apenas uma rota seja visivel
// //<Route path="/" exact component={Produtos} />
const Routes: React.FC = () => (
    <BrowserRouter>
        <Route path="/" exact component={DashBoard} />

    </BrowserRouter>
);

export default Routes;