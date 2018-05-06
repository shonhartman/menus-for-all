import React from "react";
import Header from "./Header"
import Entry from "./Entry"
import Menu from "./Menu"
import sampleMenu from "../sample-menu";
import base from "../base";


class App extends React.Component {
    state = {
        menu: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.storeId}/menu`, {
            context: this,
            state: 'menu'
        });
    }

    componentDidUpdate() {
        console.log(this.state.menu);
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }



    addMenu = menu => {
        // 1. Take a copy of the existing state
        const menuItems = { ...this.state.menu };
        // 2. Add our new menu to that menus variable
        menuItems[`menu${Date.now()}`] = menu; //TODO : maybe change this id???
        // 3. Set the new restaurantMenus object to state
        this.setState({ menu });
    };

    updateMenu = (key, updatedMenu) => {
        // 1. take a copy of the current state
        const menu = { ...this.state.menu };
        // console.log(menu);
        // 2. update that state
        menu[key] = updatedMenu;
        // 3. set that to state
        this.setState({ menu });
    }

    loadSampleMenu = () => {
        this.setState({ menu: sampleMenu });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header restaurantName="The Meteor" />
                    <ul className="fishes">
                        {Object.keys(this.state.menu).map (key => <Menu key={key} details={this.state.menu[key]} />) }
                    </ul>
                </div>
                <Entry
                    addMenu={this.addMenu}
                    updateMenu={this.updateMenu}
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