// External packages:
import React, { useState } from 'react'
import Link from "next/link"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
// Internal components:
import Image from "../common/Image"
import SearchField from "./SearchField"


// react-bootstrap Navbar with next/links and next/image:
export default function Header() {

    const [expanded, setExpanded] = useState(false)

    function collapseNavbar() {
        setExpanded(false)
    }

    return (
        <header className="sticky-top">
            <Navbar
                expanded={expanded}
                onToggle={setExpanded}
                onSelect={collapseNavbar}
                bg="dark"
                variant="dark"
                expand="lg"
            >

                <Link href="/" passHref>
                    <Navbar.Brand>
                        <Image
                            src='/images/200701-flare-hub-logo-white.png'
                            srcSizes={[220]}
                            width="110"
                            height="29.6"
                            className="d-inline-block  align-top"
                            alt="Flare Hub logo"
                            lazy={false}
                        />
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="fh-toggler" />

                <Navbar.Collapse id="basic-navbar-nav" className="ml-1 ml-xl-0">

                    <Nav className="ml-auto fh-link-white">
                        <Link href="/" passHref><Nav.Link className="pr-4">Home</Nav.Link></Link>
                        <NavDropdown className="pr-2" title="Insights" id="basic-nav-dropdown">
                            <Link href="/insights/how-to-build-value-adding-digital-solutions" passHref><NavDropdown.Item>Introduction</NavDropdown.Item></Link>
                            <Link href="/insights" passHref><NavDropdown.Item>Insight list</NavDropdown.Item></Link>
                        </NavDropdown>
                        <Link href="/about" passHref><Nav.Link className="pr-4">About</Nav.Link></Link>
                        <Link href="/contact" passHref><Nav.Link className="pr-5">Contact</Nav.Link></Link>
                    </Nav>

                    <SearchField
                        onSearch={collapseNavbar}
                    />

                </Navbar.Collapse>
            </Navbar>
        </header >
    )
}

