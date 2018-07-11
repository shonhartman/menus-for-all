import React from "react";

class EditMenuForm extends React.Component {
    handleChange = event => {
        // update that menu
        // 1. take a copy of the current menu item
        const updatedMenu = {
            ...this.props.menu,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateMenu(this.props.index, updatedMenu);
    }
    handlePriceChange = event => {
        // update the price of a menu item
        const updatedMenu = {
            ...this.props.menu,
            [event.currentTarget.name]: parseFloat(event.currentTarget.value)
        };
        this.props.updateMenu(this.props.index, updatedMenu);
    }
    removeMenuItem = () => {
        this.props.deleteMenuItem(this.props.index);
    }
    render () {
        return  <div className="menu-item-edit">
                    <input type="text" name="name" onChange={this.handleChange} value={this.props.menu.name} />
                    <input type="text" name="price" onChange={this.handlePriceChange} value={this.props.menu.price} />
                    <textarea name="desc" onChange={this.handleChange} value={this.props.menu.desc}></textarea>
                    <button onClick={this.removeMenuItem}>Remove Item</button>
                </div>
    }
}

export default EditMenuForm;