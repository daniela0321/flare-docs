import {
    Nav,
    Navbar,
    Form,
    FormControl,
    Button,
    NavDropdown,
    InputGroup
} from "react-bootstrap"
// import classes from "./Header.module.css"
import Link from "next/link"
import Image from "next/image"
import flareLogo from "../../public/images/200701-flare-hub-logo-white.png"
import classes from "./Header.module.css"

// react-bootstrap Navbar with next/links and next/image
// ToDo: Add URLs and fixed top with custom css
function Header() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
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
                    <NavDropdown className="pr-4" title="Insight Library" id="basic-nav-dropdown">
                        <Link href="#" passHref><NavDropdown.Item>Introduction</NavDropdown.Item></Link>
                        <Link href="#" passHref><NavDropdown.Item>Insights</NavDropdown.Item></Link>
                        <Link href="#" passHref><NavDropdown.Item>Subscribe</NavDropdown.Item></Link>
                    </NavDropdown>
                    <Link href="#" passHref><Nav.Link className="pr-4">About Us</Nav.Link></Link>
                    <Link href="#" passHref><Nav.Link className="pr-5">Contact</Nav.Link></Link>
                </Nav>
                <Form inline className="mt-2 mb-4 mt-lg-1 mb-lg-1">
                    <InputGroup>
                        <FormControl type="text" placeholder="Search" className="mt-2 mt-lg-0" />
                        <InputGroup.Append>
                            <Button variant="outline-light" className="mt-2 mt-lg-0">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
