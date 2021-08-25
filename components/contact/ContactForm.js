// External packages:
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Row, Col, Button, Form, FormCheck } from "react-bootstrap"


// Contact form:
export default function ContactForm() {

    const [validated, setValidated] = useState(false)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        consent: ""
    })

    const router = useRouter()

    // Save entered data
    function handleChange(event) {
        const newValue = event.target.value
        const inputName = event.target.name

        setFormData((prevValue) => {
            return {
                ...prevValue,
                [inputName]: newValue
            }
        })
    }

    // Transform attributes so that they can be sent as POST
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    // Validate form and submit it to Netlify
    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.currentTarget

        if (form.checkValidity() === true) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData })
            })

                .then(() => router.push('/success'))
                .catch(error => alert(error))
        }

        setValidated(true)
    };

    return (
        <>

            <Form noValidate validated={validated} onSubmit={handleSubmit}
                name="contact"
                data-netlify="true"
                className="px-4 pt-4 pb-5 mx-2 border rounded"
            >

                <Row className="mb-2">

                    <Form.Group as={Col} controlId="formGridFirstName" sm={12} md={6}>
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            name="firstName"
                            onChange={handleChange}
                            value={formData.firstName}
                            placeholder="Enter first name" />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your first name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName" sm={12} md={6}>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            name="lastName"
                            onChange={handleChange}
                            value={formData.lastName}
                            placeholder="Enter last name" />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your last name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-4" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        type="email"
                        placeholder="Enter email" />
                    <Form.Control.Feedback type="invalid">
                        Please fill in your email address.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="form.ControlTextarea">
                    <Form.Label>Feedback or message</Form.Label>
                    <Form.Control
                        required
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        as="textarea"
                        rows={6}
                        placeholder="Enter feedback or message" />
                    <Form.Control.Feedback type="invalid">
                        Please add your message or feedback.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-5" id="formGridCheckbox">
                    <Form.Check>
                        <FormCheck.Input
                            required
                            name="consent"
                            onChange={handleChange}
                            value={formData.consent}
                            type="checkbox"
                            id="consent" />
                        <FormCheck.Label htmlFor="consent">
                            I agree that these details will be processed and saved according to
                            our <Link href="/privacy-policy"><a target="_blank">Privacy Policy</a></Link>.
                        </FormCheck.Label>
                        <Form.Control.Feedback type="invalid">
                            Please accept this condition to submit the form.
                        </Form.Control.Feedback>
                    </Form.Check>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </>
    )
}