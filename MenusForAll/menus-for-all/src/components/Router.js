import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RestaurantLocator from "./RestaurantLocator";
import App from "./App";
import NotFound from "./NotFound";
import ClientMenu from "./ClientMenu";


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ClientMenu} />
            <Route path="/admin" component={RestaurantLocator} />
            {/* <Route path="/" component={RestaurantLocator} /> */}
            <Route path="/restaurant/:restaurantId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;