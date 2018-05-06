import React from "react";

class EditMenuForm extends React.Component {
    handleChange = event => {
        console.log(event.currentTarget.value);
        // update that menu
        // 1. take a copy of the current menu item
        const updatedMenu = {
            ...this.props.menu,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateMenu(this.props.index, updatedMenu);
    }
    render () {
        return  <div className="fish-edit">
                    <input type="text" name="name" onChange={this.handleChange} value={this.props.menu.name} />
                    <input type="text" name="price" onChange={this.handleChange} value={this.props.menu.price} />
                    <textarea name="desc" onChange={this.handleChange} value={this.props.menu.desc}></textarea>
                </div>
    }
}

export default EditMenuForm;