import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RestaurantLocator from "./RestaurantLocator";
import App from "./App";
import NotFound from "./NotFound";


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={RestaurantLocator} />
            <Route path="/restaurant/:restaurantId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;