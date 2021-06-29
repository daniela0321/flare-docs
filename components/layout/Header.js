import {
    Nav,
    Navbar,
    Form,
    FormControl,
    Button,
    NavDropdown
} from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
import flareLogo from "../../public/images/200701-flare-hub-logo-white.png"

// Bootstrap Navbar with next/link and next/image
// ToDo: Add URLs!
function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand href="#home">
                <Image
                    src={flareLogo}
                    width="110"
                    height="29.6"
                    className="d-inline-block  align-top"
                    alt="Flare Hub logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
                <NavDropdown title="Insight Library" id="basic-nav-dropdown">
                    <Link href="#" passHref><NavDropdown.Item>Introduction</NavDropdown.Item></Link>
                    <Link href="#" passHref><NavDropdown.Item>Insights</NavDropdown.Item></Link>
                    <Link href="#" passHref><NavDropdown.Item>Subscribe</NavDropdown.Item></Link>
                </NavDropdown>
                <Link href="#" passHref><Nav.Link>About Us</Nav.Link></Link>
                <Link href="#" passHref><Nav.Link>Contact</Nav.Link></Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Header
