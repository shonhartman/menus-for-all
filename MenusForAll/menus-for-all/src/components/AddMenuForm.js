import React from "react";

class AddMenuForm extends React.Component {

    state = {
        desc : []
    }

    nameRef = React.createRef();
    priceRef = React.createRef();
    descRef = React.createRef();
    // imageRef = React.createRef();

    createItem = (event) => {
        if(event.key == 'Tab') {
            let desc = [...this.state.desc];
            const item = this.descRef.current.value;
            desc = this.state.desc.push(item);
            this.setState([desc]);
            this.descRef.current.value = "";
        }
    }

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
            // desc: this.descRef.current.value,
            desc: this.state.desc
            // image: this.imageRef.current.value
        };
        this.props.addMenuItem(menuItem);
        // refresh the form
        event.currentTarget.reset();
        // refresh local state
        this.state.desc = [];
    }

    render() {
        return (
            <div>
            <form className="menu-item-edit" onSubmit={this.createEntry}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                {/* <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select> */}
                {/* <textarea name="desc" ref={this.descRef} placeholder="Desc"> </textarea> */}
                <input name="desc" ref={this.descRef} type="text" onKeyDown={this.createItem} />
                <ul>
                    {Object.keys(this.state.desc).map(key => <li key={key}>{this.state.desc[key]}</li>)}
                </ul>
                {/* <input name="image" type="text" ref={this.imageRef} placeholder="Image" /> */}
                <button type="submit">+ Add To Menu</button>
            </form>
            {/* ATTEMPT AT DISPLAYING STATE TO NO AVAIL */}
            {/* <ul className="menu-listing">
                {Object.keys(this.state.menu).map (key => <Menu key={key} details={this.state.menu[key]} />) }
            </ul> */}
        </div>

        );
    }
}

export default AddMenuForm;