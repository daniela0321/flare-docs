// Styles:
import styles from "./Footer.module.css"
// External packages:
import Link from "next/link"
import { Row, Col, Container } from "react-bootstrap"
// Internal components:
import GitHubIcon from "../../../components/layout/common/GitHubIcon"


// Html footer with react-bootstrap elements and next/links
export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <Container className="d-flex flex-column align-items-center">

                {/* Links */}
                <Row className={styles.row}>
                    <Col sm className={styles.column}>
                        <Link href="/terms"><a className={styles.footerlink}>Terms of Use</a></Link>
                    </Col>
                    <Col sm className={styles.column}>
                        <Link href="/privacy-policy"><a className={styles.footerlink}>Privacy Policy</a></Link>
                    </Col>
                    <Col sm className={styles.column}>
                        <Link href="/cookie-policy"><a className={styles.footerlink}>Cookie Policy</a></Link>
                    </Col>
                </Row>

                {/* Link to GitHub project */}
                <Row className="mt-4">
                    <a href="https://github.com/daniela0321/flare-docs" target="_blank" rel="noopener" className={styles.footerlink}>
                        <GitHubIcon />
                    </a>
                </Row>

                {/* Copyright text */}
                <Row className={styles.row}>
                    <Col sm className={styles.column}>
                        <p className={styles.copyright}>Copyright © {currentYear} Flare Hub Ltd</p>
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}








