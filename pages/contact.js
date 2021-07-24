import { Fragment } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import HeadMeta from "../components/layout/HeadMeta"
import PageTitle from "../components/layout/PageTitle"
import Link from 'next/link'
import PhoneIcon from "../components/contact/PhoneIcon"

function Contact() {
    return (
        <Fragment>

            <HeadMeta
                title="Contact Us"
                description="Please contact us via the form or by phone."
            />

            <PageTitle
                title="Contact Us"
            />

            <Container>

                <Row className="m-0 p-0 d-flex flex-row justify-content-center">
                    <p>
                        {/* Sizing for icon doesn't work */}
                        {/* <span><PhoneIcon /></span> */}
                        If you would like to call us, see our direct contact details <Link href="/about">here</Link>. Otherwise, please fill out this form.</p>
                </Row>

                {/* Another way of doing it: */}
                {/* <Row className="m-0 p-0">
                    <Col lg={1} className="d-flex flex-row justify-content-right">
                        <PhoneIcon />
                    </Col>
                    <Col lg={11} className="d-flex flex-row justify-content-left">
                        <p>If you would like to call us, see our direct contact details <Link href="/about">here</Link>. Otherwise, please fill out this form.</p>
                    </Col>
                </Row> */}

                <Row className="my-5 pb-5 d-flex flex-row justify-content-center">
                    {/* Check in which way to do the form validation */}
                    {/* How about the I'm not a robot functionality (recaptcha) */}
                    <Form className="px-4 pt-4 pb-5 mx-2 border rounded">
                        <Row className="mb-2">
                            {/* One or two columns in mobile? */}

                            <Form.Group as={Col} controlId="formGridFName" sm={12} md={6}>
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="fname" placeholder="Enter first name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLName" sm={12} md={6}>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="password" placeholder="Enter last name" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-4" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="form.ControlTextarea1">
                            <Form.Label>Feedback or message</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="Enter feedback or message" />
                        </Form.Group>

                        <Form.Group className="mb-5" id="formGridCheckbox">
                            {/* Add link */}
                            <Form.Check type="checkbox" label="I agree that these details will be processed and saved according to our PRIVACY POLICY." />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>

            </Container >
        </Fragment >
    )
}

export default Contact