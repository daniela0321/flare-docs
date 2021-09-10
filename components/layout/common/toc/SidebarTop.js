// Styles:
import styles from "./SidebarTop.module.css"
// External packages:
import React, { useState } from "react"
import { Accordion, Card } from "react-bootstrap"
// Internal components:
import ClickArrow from "./ClickArrow"


// Clickable Page Contents on top of the screen (used on a smaller screen):
export default function SidebarTop({ children }) {

    const [open, setOpen] = useState(false)

    return (
        <aside>
            <Accordion>

                <Card className={styles.card}>

                    <Accordion.Toggle className={styles.toggle} as={Card.Header} variant="link" eventKey="1">
                        <h6 className={styles.title}>Page Contents
                            <span className="ml-3"><ClickArrow eventKey="1" /></span>
                        </h6>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            {children}
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>
            </Accordion>
        </aside>
    );
}

