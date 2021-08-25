// External packages:
import Link from 'next/link'
import { Container, Row } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import PageTitle from "../components/layout/PageTitle"
import PhoneIcon from "../components/contact/PhoneIcon"
import FormIcon from "../components/contact/FormIcon"
import ContactForm from '../components/contact/ContactForm'


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
                        <ContactForm />
                    </Row>

                </Container>

            </main>
        </>
    )
}
