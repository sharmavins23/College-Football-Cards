// Imports
import React from "react";
import ReactDOM from "react-dom";
import styles from "./stylesheet.module.css";
import InfoArea from "./components/InfoArea";

// Main container
function App() {
    return (
        <div class={styles.main}>
            <InfoArea />
        </div>
    );
}

// Render
ReactDOM.render(<App />, document.getElementById("app"));
