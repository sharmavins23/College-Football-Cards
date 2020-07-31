// Imports
import React, { useState } from "react";
import ReactDOM from "react-dom";
// Components
import InfoArea from "./components/InfoArea";
import EntryArea from "./components/EntryArea";
import CardArea from "./components/CardArea";

// Main container
function App() {
    // Contains all individual components

    // Saving variable to passthrough (without re-render)
    // States
    const [value, setValue] = useState("");

    // Callback function to change and save data state from child EntryArea
    function handleChange(value) {
        setValue(value);
    }

    // Render
    return (
        <div>
            <InfoArea />
            <EntryArea parentCallback={handleChange} />
            <CardArea />
        </div>
    );
}

// Render
ReactDOM.render(<App />, document.getElementById("app"));
