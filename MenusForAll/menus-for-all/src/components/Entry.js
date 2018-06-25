import React from "react";
import AddMenuForm from "./AddMenuForm";
import EditMenuForm from "./EditMenu";

class Entry extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Menu Entry</h2>
                {Object.keys(this.props.menu).map(key => <EditMenuForm
                    menu={this.props.menu[key]}
                    updateMenu={this.props.updateMenu}
                    deleteMenuItem={this.props.deleteMenuItem}
                    key={key}
                    index={key}
                />)}
                <AddMenuForm addMenuItem={this.props.addMenuItem} />
                {/* <button onClick={this.props.loadSampleMenu}>Load Menu</button> */}
            </div>
        )
    }
}

export default Entry;