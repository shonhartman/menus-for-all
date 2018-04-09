import React from 'react';
import { format } from 'util';

class RestaurantLocator extends React.Component {
    render() {
        return (
            <form action="" className="store-selector">
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store -></button>
            </form>
        )

    }
}

// I think we might have geo-location logic here or perhaps it would be in helpers.js ????

export default RestaurantLocator;