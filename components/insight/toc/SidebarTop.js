import classes from "./SidebarTop.module.css"
import React, { useState } from "react"
import { Accordion, Card, Button } from "react-bootstrap"
import ClickArrow from "./ClickArrow"
import TableOfContents from "./TableOfContents"

// Clickable Page Contents on top of the screen (used on a smaller screen):
export default function SidebarTop({ content }) {

    const [open, setOpen] = useState(false)

    return (
        <aside className="d-xl-none">
            <Accordion>

                <Card className={classes.card}>

                    <Accordion.Toggle className={classes.toggle} as={Card.Header} variant="link" eventKey="1">
                        <h6 className={classes.title}>Page Contents
                            <span className="ml-3"><ClickArrow eventKey="1" /></span>
                        </h6>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <TableOfContents
                                content={content}
                            />
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>
            </Accordion>
        </aside>
    );
}

