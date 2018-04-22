import React from "react";
import Header from "./Header"
import Entry from "./Entry"


class App extends React.Component {
    state = {
        menus: {}
    };
    addMenu = menu => {
        // 1. Take a copy of the existing state
        const menus = { ...this.state.menus };
        // 2. Add our new menu to that menus variable
        menus[`menu${Date.now()}`] = menu; //TODO : maybe change this id???
        // 3. Set the new menus object to state
        this.setState({ menus });
    };
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header restaurantName="The Meteor" />
                </div>
                <Entry addMenu={this.addMenu} />
                {/* <Inventory />
                <Order /> */}
            </div>
        )
    }
}

export default App;