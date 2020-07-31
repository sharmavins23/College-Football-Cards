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

    // Render
    return (
        <div>
            <InfoArea />
            <EntryArea />
            <CardArea />
        </div>
    );
}

// Render
ReactDOM.render(<App />, document.getElementById("app"));
