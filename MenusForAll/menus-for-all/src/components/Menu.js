import React from "react";
import { formatPrice } from "../helpers";

class Menu extends React.Component {

    render() {
        const { image, name, price, desc, status } = this.props.details;
        return (
            <div className="menu-item">
                <h3 className="category">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
            </div>
        )
    }
}

export default Menu;