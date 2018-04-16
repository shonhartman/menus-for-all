import React from "react";

class Header extends React.Component {
    render() {
        return (
        <header className="top">
            <h1>Menus for All</h1>
            <h3 className="tagline">
                <span>{this.props.restaurantName}</span>
            </h3>
        </header>

    )
    }
}

export default Header;
