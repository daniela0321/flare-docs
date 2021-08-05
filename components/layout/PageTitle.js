// External packages:
import { Container, Row } from "react-bootstrap"


// Page title:
export default function PageTitle({ title }) {
    return (
        <Container className="py-5" >
            <Row className="pt-4 px-2 d-flex flex-row justify-content-center">
                <h1>{title}</h1>
            </Row>
        </Container>
    )
}
