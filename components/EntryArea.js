// Imports
import React, { useState, useEffect } from "react";
import styles from "../stylesheet.module.css";

// Entry area container - middle section of application
function EntryArea() {
    // Contains the area box for the user to select the conference they wish to load,
    // as well as the request call to the API to initially load up and populate the
    // selection box

    // States
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // HTTP call hook
    useEffect(() => {
        fetch("https://api.collegefootballdata.com/conferences", {
            method: "GET",
            headers: new Headers({
                Accept: "application/json",
            }),
        })
            .then((response) => response.json()) // Convert to JSON
            .then((response) => {
                // Replace object key names
                return response.map((obj) => {
                    return {
                        key: obj.id,
                        text: obj.name,
                        value: obj.abbreviation,
                        short_name: obj.short_name,
                    };
                });
            })
            .then((response) => {
                setData(response);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    // Render
    return (
        <div class={styles.main}>
            <div class={styles.area + " " + styles.area_entry}>
                <h2>Enter a College Football Conference</h2>
                <p>
                    Select a college football conference from the dropdown list.
                </p>
            </div>
        </div>
    );
}

// Module export
export default EntryArea;
