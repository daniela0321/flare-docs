// Styles:
import styles from '../styles/success.module.css'
// External packages:
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
                <div className={styles.success}>

                    <p>We have received your message.</p>
                    <p>Thank you for your feedback!</p>
                    <Button href="/" className="mt-3">Home page</Button>

                </div>
            </Container>
        </>
    )
}