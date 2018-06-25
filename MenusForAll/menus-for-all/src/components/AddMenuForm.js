import React from "react";
import Menu from "./Menu"

class AddMenuForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createEntry = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        let stringPrice = this.priceRef.current.value;
        let numberPrice;
        if (!parseFloat(stringPrice)) {
            numberPrice = '';
        } else {
            numberPrice = parseFloat(stringPrice);
        }
        const menuItem = {
            name: this.nameRef.current.value,
            price: numberPrice,
            desc: this.descRef.current.value,
            // image: this.imageRef.current.value
        };
        this.props.addMenuItem(menuItem);
        // refresh the form
        event.currentTarget.reset();
    }

    render() {
        return (
            <div>
            <form className="fish-edit" onSubmit={this.createEntry}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                {/* <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select> */}
                <textarea name="desc" ref={this.descRef} placeholder="Desc"> </textarea>
                {/* <input name="image" type="text" ref={this.imageRef} placeholder="Image" /> */}
                <button type="submit">+ Add To Menu</button>
            </form>
            {/* ATTEMPT AT DISPLAYING STATE TO NO AVAIL */}
            {/* <ul className="fishes">
                {Object.keys(this.state.menu).map (key => <Menu key={key} details={this.state.menu[key]} />) }
            </ul> */}
        </div>

        );
    }
}

export default AddMenuForm;