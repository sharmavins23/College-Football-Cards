// Imports
import React, { useState, useEffect } from "react";
import { Typography, Select } from "antd";
const { Title, Text } = Typography;
const { Option } = Select;
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
        <div>
            {/* Left Div */}
            <div>
                {/* Title */}
                <Title level={3}>Enter a football conference.</Title>
                <Text>
                    Select from the dropdown one of the supported College
                    Football conferences.
                </Text>
            </div>

            {/* Right Div */}
            <div>
                <Select
                    filterOption={(input, option) =>
                        option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Choose conference"
                    size="large"
                    showSearch
                    optionFilterProp="children"
                    loading={isLoading}
                    style={{ width: 400 }}>
                    {data.map((obj) => (
                        <Option value={obj.value}>{obj.text}</Option>
                    ))}
                </Select>
            </div>
        </div>
    );
}

// Module export
export default EntryArea;
