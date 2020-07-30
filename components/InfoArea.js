// Imports
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import styles from "../stylesheet.module.css";

// Info area container - topmost section of the application.
function InfoArea() {
    // Contains a simple overview of the project, as well as button links to this
    // project's source code, and other GitHub repositories.
    return (
        <div class={styles.main}>
            <Jumbotron bsPrefix={styles.jumbotron}>
                <h1>College Football Cards</h1>
                <p>
                    This is a small website that scrapes college football APIs
                    and displays card information. The cards have helpful links
                    detailing individual college specifications, as well as
                    buttons to view more information about game schedules. You
                    can check out other similar and interesting projects in my
                    Github repositories.
                </p>
                <p>
                    <a href="https://github.com/sharmavins23/College-Football-Cards">
                        <button
                            class={styles.button + " " + styles.buttonInfoArea}>
                            <span>Code </span>
                        </button>
                    </a>
                </p>
            </Jumbotron>
        </div>
    );
}

export default InfoArea;
