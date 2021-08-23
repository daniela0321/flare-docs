// Styles:
import classes from "./Footer.module.css"
// External packages:
import Link from "next/link"
import { Row, Col, Container } from "react-bootstrap"
// Internal components:
import GitHubIcon from "./GitHubIcon"


// Html footer with react-bootstrap elements and next/links
export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <footer className={classes.footer}>
            <Container className="d-flex flex-column align-items-center">

                {/* Links */}
                <Row className={classes.row}>
                    <Col sm className={classes.column}>
                        <Link href="/terms"><a className={classes.footerlink}>Terms of Use</a></Link>
                    </Col>
                    <Col sm className={classes.column}>
                        <Link href="/privacy-policy"><a className={classes.footerlink}>Privacy Policy</a></Link>
                    </Col>
                    <Col sm className={classes.column}>
                        <Link href="/cookie-policy"><a className={classes.footerlink}>Cookie Policy</a></Link>
                    </Col>
                </Row>

                {/* Link to GitHub project */}
                <Row className="mt-4">
                    <a href="https://github.com/daniela0321/flare-docs" target="_blank" rel="noopener" className={classes.footerlink}>
                        <GitHubIcon />
                    </a>
                </Row>

                {/* Copyright text */}
                <Row className={classes.row}>
                    <Col sm className={classes.column}>
                        <p className={classes.copyright}>Copyright © {currentYear} Flare Hub Ltd</p>
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}








