// Imports
import React from "react";
import ReactDOM from "react-dom";
import styles from "./stylesheet.module.css";
// Components
import InfoArea from "./components/InfoArea";
import EntryArea from "./components/EntryArea";
import CardArea from "./components/CardArea";

// Main container
function App() {
    // Contains all individual components

    // States
    const [data, setData] = useState([]);

    // Callback function to change and save data state from child EntryArea
    let callback = (data) => {
        setData(data);
    };

    // Render
    return (
        <div>
            <InfoArea />
            <EntryArea parentCallback={this.callback} />
            <CardArea data={this.state.data} />
        </div>
    );
}

// Render
ReactDOM.render(<App />, document.getElementById("app"));
