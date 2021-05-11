import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Categoria from './pages/Categoria';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/home" component={() => <Home />} />
            <Route exact path="/sobre" component={() => <Sobre />} />
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/categoria" component={() => <Categoria />} />
            <Route component={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;