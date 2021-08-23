// External packages:
import Link from 'next/link'
import { Container, Row, Col, Button, Form, FormCheck } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import PageTitle from "../components/layout/PageTitle"
import PhoneIcon from "../components/contact/PhoneIcon"
import FormIcon from "../components/contact/FormIcon"


// Contact Us page:
export default function Contact() {
    return (
        <>
            <HeadMeta
                title="Contact Us"
                description="Please contact us via the form or by phone"
            // canonical=
            // type=
            // image={{
            // url: 
            // alt:
            // }}
            />

            <main>
                <PageTitle
                    title="Contact Us"
                />

                <Container>

                    <Row className="mb-2 d-flex flex-row justify-content-center">
                        <PhoneIcon />
                    </Row>
                    <Row className="mb-3 mx-2 text-center d-flex flex-row justify-content-center">
                        <p>If you would like to call us, see our direct contact
                            details <Link href="/about"><a>here</a></Link>.</p>
                    </Row>

                    <Row className="mt-5 mb-2 d-flex flex-row justify-content-center">
                        <FormIcon />
                    </Row>
                    <Row className="mx-2 text-center d-flex flex-row justify-content-center">
                        <p>Otherwise, please fill out this form.</p>
                    </Row>

                    <Row className="mt-2 mb-5 pb-5 d-flex flex-row justify-content-center">
                        {/* Check in which way to do the form validation */}
                        {/* How about the I'm not a robot functionality (recaptcha) */}
                        <Form className="px-4 pt-4 pb-5 mx-2 border rounded">
                            <Row className="mb-2">

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
                                <Form.Check>
                                    <FormCheck.Input type="checkbox" id="consent" />
                                    <FormCheck.Label htmlFor="consent">
                                        I agree that these details will be processed and saved according to
                                        our <Link href="/privacy-policy"><a target="_blank">Privacy Policy</a></Link>.
                                    </FormCheck.Label>
                                    {/* <Feedback type="invalid">Yo this is required</Feedback> */}
                                </Form.Check>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </Row>
                </Container>
            </main>
        </>
    )
}
