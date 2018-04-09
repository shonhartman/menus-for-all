import React from "react";
import Header from "./Header"
import Entry from "./Entry"


class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                </div>
                <Entry />
                {/* <Inventory />
                <Order /> */}
            </div>
        )
    }
}

export default App;