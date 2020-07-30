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
    return (
        <div class={styles.main}>
            <InfoArea />
            <EntryArea />
        </div>
    );
}

// Render
ReactDOM.render(<App />, document.getElementById("app"));
