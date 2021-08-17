// External packages:
import Link from "next/link"
import Image from "next/image"
import { Nav, Navbar, Form, FormControl, Button, NavDropdown, InputGroup } from "react-bootstrap"
// Images:
import flareLogo from "../../public/images/200701-flare-hub-logo-white.png"


// react-bootstrap Navbar with next/links and next/image:
export default function Header() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">

            <Navbar.Brand href="/">
                <Image
                    src={flareLogo}
                    width="110"
                    height="29.6"
                    className="d-inline-block  align-top"
                    alt="Flare Hub logo"
                />
            </Navbar.Brand>

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

                <Form inline className="mt-2 mb-4 mt-lg-1 mb-lg-1">
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for Insights" className="mt-2 mt-lg-0" />
                        <InputGroup.Append>
                            <Button variant="outline-light" className="mt-2 mt-lg-0">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>

            </Navbar.Collapse>
        </Navbar>
    )
}

