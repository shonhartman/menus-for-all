import React from "react";
import Header from "./Header"
import Entry from "./Entry"
import Menu from "./Menu"
import sampleMenu from "../sample-menu";
import base from "../base";


class App extends React.Component {
    state = {
        menu: {},
        location: {},
    };

    componentDidMount() {
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

    // componentDidUpdate() {
    //     console.log(this.state.menu);
    // }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }



    addMenuItem = menuItem => {
        // 1. Take a copy of the existing state
        const menu = { ...this.state.menu };
        // 2. Add our new menu item to that menus variable
        menu[`menu${Date.now()}`] = menuItem; //TODO : maybe change this id???
        // 3. Set the new menuItems object to state
        this.setState({ menu });
    };

    updateMenu = (key, updatedMenu) => {
        // 1. take a copy of the current state
        const menu = { ...this.state.menu };
        // 2. update that state
        menu[key] = updatedMenu;
        // 3. set that to state
        this.setState({ menu });
    }

    deleteMenuItem = (key) => {
        // 1. take a copy of state
        const menu = { ...this.state.menu };
        // 2. updtate the state
        menu[key] = null;
        // 3. update state
        this.setState({ menu });
    }

    // loadSampleMenu = () => {
    //     this.setState({ menu: sampleMenu });
    // }

    render() {
        return (
            <div className="menus-for-all">
                <div className="menu">
                    <Header restaurantName={this.props.match.params.restaurantId} />
                    <ul className="menu-listing">
                        {Object.keys(this.state.menu).map (key => <Menu key={key} details={this.state.menu[key]} />) }
                    </ul>
                </div>
                <Entry
                    addMenuItem={this.addMenuItem}
                    updateMenu={this.updateMenu}
                    deleteMenuItem={this.deleteMenuItem}
                    loadSampleMenu={this.loadSampleMenu}
                    menu={this.state.menu}
                />
                {/* <Inventory />
                <Order /> */}
            </div>
        )
    }
}

export default App;