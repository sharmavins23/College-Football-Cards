import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import styles from "../stylesheet.module.css";

function InfoArea() {
    return (
        <div class={styles.main}>
            <Jumbotron bsPrefix={styles.jumbotron}>
                <h1>College Football Cards</h1>
                <p>
                    This is a small website that scrapes college football APIs
                    and displays card information. You can check out other
                    similar and interesting projects in my Github repositories.
                </p>
                <p>
                    <a href="https://github.com/sharmavins23">
                        <button
                            class={styles.button + " " + styles.buttonInfoArea}>
                            <span>More </span>
                        </button>
                    </a>
                </p>
            </Jumbotron>
        </div>
    );
}

export default InfoArea;
