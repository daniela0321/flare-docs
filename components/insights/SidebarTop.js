import React, { useState } from "react"
import { Accordion, Card, Button } from "react-bootstrap"
import classes from "./SidebarTop.module.css"
import InsightContents from "./InsightContents"

function SidebarTop() {
    const [open, setOpen] = useState(false);

    return (
        <aside className="m-0 p-0 d-xl-none">
            <Accordion>
                <Card className={classes.card}>

                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                        <h6 className={classes.title}>Page Contents</h6>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <InsightContents />
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>
            </Accordion>
        </aside >
    );
}

export default SidebarTop
