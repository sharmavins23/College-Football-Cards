// Imports
import React, { useState, useEffect } from "react";
import { Button, Empty } from "antd";
import { Card, CardColumns } from "react-bootstrap";
import { CalendarOutlined } from "@ant-design/icons";

// Card area container - bottom-most section of application
function CardArea({ value }) {
    // Contains the area box for the individual card displays, which are populated
    // based on the text string passed through the parent from the child EntryArea
    // component

    // States
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let dataIsEmpty = data.length === 0;

    // HTTP call hook
    useEffect(() => {
        fetch(`https://api.collegefootballdata.com/teams?conference=${value}`, {
            method: "GET",
            headers: new Headers({
                Accept: "application/json",
            }),
        })
            .then((response) => response.json()) // Convert to JSON
            .then((response) => {
                // Sanitize object
                return response.map((obj) => {
                    return {
                        id: obj.id,
                        name: obj.school,
                        mascot: obj.mascot,
                        abbr: obj.abbreviation,
                        color: obj.color,
                        logo: obj.logos[0],
                    };
                });
            })
            .then((response) => {
                setData(response); // Save our data in the state
                setIsLoading(false);
            })
            .catch((error) => console.log(error)); // Error handling
    });

    // Render
    return (
        <div>
            {/* Empty state */}
            {dataIsEmpty && (
                <Empty description={<span>No colleges found.</span>}></Empty>
            )}

            {/* Populated state */}
            {!dataIsEmpty && (
                <div>
                    <CardColumns>
                        {data.map((obj) => (
                            <Card style={{ width: 150 }}>
                                <Card.Img src={obj.logo} variant="top" />
                                <Card.Body>
                                    <Card.Title>{obj.name}</Card.Title>
                                    <Card.Text>{obj.mascot}</Card.Text>
                                    <Button
                                        href={`https://espn.com/college-football/team/schedule/_/id/${obj.id}`}
                                        shape="round"
                                        type="default">
                                        Schedule
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardColumns>
                </div>
            )}
        </div>
    );
}
// TODO: Fix icons on buttons, as they're not working
// TODO: Change cards back to antd
// TODO: Add cards to table as necessary

// Module export
export default CardArea;
