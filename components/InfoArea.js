// Imports
import React from "react";
import styles from "../stylesheet.module.css";

// Info area container - topmost section of application
function InfoArea() {
    // Contains a simple overview of the project, as well as button links to this
    // project's source code, and other GitHub repositories

    // Render
    return (
        <div class={styles.main}>
            <div class={styles.area + " " + styles.area_info}>
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
                            class={styles.button + " " + styles.button_info}>
                            <span>Code </span>
                        </button>
                    </a>
                </p>
            </div>
        </div>
    );
}

// Module export
export default InfoArea;
