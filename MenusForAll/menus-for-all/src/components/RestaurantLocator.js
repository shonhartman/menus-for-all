import React from 'react';
import { format } from 'util';
import { getLocation } from "../helpers";
import { fishes } from '../sample-menu';

class RestaurantLocator extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        const restaurantName = this.myInput.current.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/restaurant/${restaurantName}`);
    }
    // Maybe we call the helper function for getting the location in componentDidMount???
    // componentDidMount() {
    //     console.log("Mounted!");
    //     console.log(this);
    // }
    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getLocation()}
                />
                <button type="submit">Visit Store -></button>
            </form>
        )

    }
}

export default RestaurantLocator;