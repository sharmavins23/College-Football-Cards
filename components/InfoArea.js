// Imports
import React from "react";
import { Button, Typography } from "antd";
const { Title, Text } = Typography;
import { GithubOutlined } from "@ant-design/icons";
// Styles
import {} from "antd/dist/antd.css";
import styles from "../stylesheet.module.css";

// Info area container - topmost section of application
function InfoArea() {
    // Contains a simple overview of the project, as well as button links to this
    // project's source code, and other GitHub repositories

    // Render
    return (
        <div class={styles.infoArea_background}>
            <div class={styles.infoArea}>
                {/* Title */}
                <Title style={{ color: "white" }}>College Football Cards</Title>

                {/* Text paragraph */}
                <div class={styles.infoArea_textParagraph}>
                    <Text style={{ color: "white" }}>
                        This is a small website that scrapes college football
                        APIs and displays card information.
                    </Text>
                    <br />
                    <Text style={{ color: "white" }}>
                        The cards have helpful links detailing individual
                        college specifications, as well as buttons to view more
                        information about game schedules.
                    </Text>
                    <br />
                    <Text style={{ color: "white" }}>
                        You can check out other interesting projects like this
                        on my GitHub.
                    </Text>
                </div>

                {/* Source Code Button */}
                <Button
                    href="https://github.com/sharmavins23/College-Football-Cards/"
                    type="primary"
                    icon={<GithubOutlined />}
                    shape="round">
                    Code
                </Button>
            </div>
        </div>
    );
}

// Module export
export default InfoArea;
