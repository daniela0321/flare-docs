import {
    Row,
    Col,
    Container
} from "react-bootstrap"
import classes from "./Footer.module.css"
import Link from "next/link"

const currentYear = new Date().getFullYear()

// Html footer with react-bootstrap elements and next/links
// ToDo: Add URLs 
function Footer() {
    return (
        <footer className={classes.footer}>
            <Container>
                {/* Links */}
                <Row className={classes.row}>
                    <Col sm className={classes.column}>
                        <Link href="#"><a>Terms of Use</a></Link>
                    </Col>
                    <Col sm className={classes.column}>
                        <Link href="#"><a>Privacy Policy</a></Link>
                    </Col>
                    <Col sm className={classes.column}>
                        <Link href="#"><a>Cookie Policy</a></Link>
                    </Col>
                </Row>
                {/* Copyright */}
                <Row className={classes.row}>
                    <Col sm className={classes.column}>
                        <p className={classes.copyright}>Copyright © {currentYear} Flare Hub Ltd</p>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default Footer







