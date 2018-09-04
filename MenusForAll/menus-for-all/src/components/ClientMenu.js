import React from "react";
import { getLocation } from "../helpers";
import App from "./App";
import Menu from "./Menu";
import base from "../base";
import Header from "./Header";
import Router from "./Router";


class ClientMenu extends React.Component {
    state = {
        menu: {},
        location: {},
    };

    componentDidMount() {
        console.log("Mounted!")
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.restaurantId}/menu`, {
            context: this,
            state: 'menu'
        });
        this.ref = base.syncState(`${params.restaurantId}/menu`, {
            context: this,
            state: 'location'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    render () {
        return (
            <div>
                <h1 className="main-heading">Client Menu!</h1>
                <p>Menu Items</p>
                <Header restaurantName={this.props.match.params.restaurantId} />

                {/* <ul className="menu-listing">
                    {Object.keys(this.state.menu).map (key => <Menu key={key} details={this.state.menu[key]} />) }
                </ul> */}


            </div>

        )
    }
}

export default ClientMenu;
