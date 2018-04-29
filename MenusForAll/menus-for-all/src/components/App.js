import React from "react";
import Header from "./Header"
import Entry from "./Entry"
import Menu from "./Menu"
import sampleMenu from "../sample-menu";


class App extends React.Component {
    state = {
        menu: {}
    };
    addMenu = menu => {
        // 1. Take a copy of the existing state
        const menus = { ...this.state.menus };
        // 2. Add our new menu to that menus variable
        menus[`menu${Date.now()}`] = menu; //TODO : maybe change this id???
        // 3. Set the new menus object to state
        this.setState({ menus });
    };
    loadSampleMenu = () => {
        this.setState({ menu: sampleMenu });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header restaurantName="The Meteor" />
                    <ul className="fishes">
                        {Object.keys(this.state.menu).map (key => <Menu key={key} />) }
                    </ul>
                </div>
                <Entry
                    addMenu={this.addMenu}
                    loadSampleMenu={this.loadSampleMenu}
                />
                {/* <Inventory />
                <Order /> */}
            </div>
        )
    }
}

export default App;