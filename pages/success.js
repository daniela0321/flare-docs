// Styles:
import styles from '../styles/success.module.css'
// External packages:
import Link from "next/link"
import { Container, Button } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"


// Success message for a form submission:
export default function Success() {
    return (
        <>
            <HeadMeta
                title="Success"
                description="Form successfully submitted"
            // canonical=
            // type=
            // image={{
            // url: 
            // alt:
            // }}
            />

            <Container className="d-flex justify-content-center">
                <div className={`${styles.success} p-5 border rounded`}>

                    <p>We have received your message.</p>
                    <p>Thank you for your feedback!</p>


                    <Link href="/">
                        <a role="button" className="mt-3 btn btn-primary">
                            Home page
                        </a>
                    </Link>

                </div>
            </Container>
        </>
    )
}