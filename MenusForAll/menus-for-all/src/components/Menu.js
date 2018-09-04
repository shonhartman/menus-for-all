import React from "react";
import { formatPrice } from "../helpers";

class Menu extends React.Component {

    render() {
        const { image, name, price, desc, status } = this.props.details;
        return (
            <div className="menu-item">
                <h3 className="category">{name}
                    <span className="price">starting at {formatPrice(price)}</span>
                </h3>
                {/* <article>{desc}</article> */}
                <ul>
                    {Object.keys(this.props.details.desc).map(key => <li key={key}>{this.props.details.desc[key]}</li>)}
                </ul>
            </div>
        )
    }
}

export default Menu;