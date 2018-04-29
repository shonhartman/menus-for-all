import React from "react";

class AddMenuForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        const menu = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addMenu(menu);
        // refresh the form
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                {/* <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select> */}
                <textarea name="desc" ref={this.descRef} placeholder="Desc"> </textarea>
                {/* <input name="image" type="text" ref={this.imageRef} placeholder="Image" /> */}
                <button type="submit">+ Add Menu</button>
            </form>

        );
    }
}

export default AddMenuForm;