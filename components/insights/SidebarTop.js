import React, { useState } from "react"
import { Accordion, Card, Button } from "react-bootstrap"
import classes from "./SidebarTop.module.css"
import InsightContents from "./InsightContents"
import ClickArrow from "./ClickArrow"

function SidebarTop() {
    const [open, setOpen] = useState(false)

    return (
        <aside className="m-0 p-0 d-xl-none">
            <Accordion>

                <Card className={classes.card}>

                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                        <h6 className={classes.title}>Page Contents
                            <span className="ml-3"><ClickArrow eventKey="1" /></span>
                        </h6>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <InsightContents />
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>
            </Accordion>
        </aside>
    );
}

export default SidebarTop
