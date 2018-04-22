import React from "react";
import AddMenuForm from './AddMenuForm';

class Entry extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Menu Entry</h2>
                <AddMenuForm addMenu={this.props.addMenu} />
            </div>

        )
    }
}

export default Entry;