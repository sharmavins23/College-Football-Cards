// Imports
import React, { useState, useEffect } from "react";
import { Typography, Divider, Select } from "antd";
const { Title, Text } = Typography;
const { Option } = Select;
import styles from "../stylesheet.module.css";

// Entry area container - middle section of application
function EntryArea({ parentCallback }) {
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
                // Sanitize object key names
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
                setData(response); // Save our data in the state
                setIsLoading(false);
            })
            .catch((error) => console.log(error)); // Error handling
    }, []);

    // Uses callback function to send out our selected variable
    function handleSelect(value) {
        parentCallback(value);
    }

    // Render
    return (
        <div class={styles.entryArea}>
            <table class={styles.entryAreaTable}>
                <tr>
                    {/* Left side */}
                    <td
                        class={
                            styles.entryAreaTable_left +
                            " " +
                            styles.entryAreaTable_cell
                        }>
                        {/* Title */}
                        <Title level={3}>Enter a football conference.</Title>
                        <Text>
                            Select from the dropdown one of the supported
                            College Football conferences.
                        </Text>
                        <br />
                        <Text>
                            Once you select one, all football teams making up
                            that conference will be displayed beneath in cards.
                        </Text>
                    </td>

                    {/* Right side */}
                    <td class={styles.entryAreaTable_cell}>
                        <Select
                            filterOption={(input, option) =>
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            }
                            loading={isLoading}
                            onSelect={handleSelect}
                            optionFilterProp="children"
                            placeholder="Choose conference"
                            showSearch
                            size="large"
                            style={{ width: 200 }}>
                            {data.map((obj) => (
                                <Option value={obj.value}>{obj.text}</Option>
                            ))}
                        </Select>
                    </td>
                </tr>
            </table>
            <Divider />
        </div>
    );
}

// Module export
export default EntryArea;
