import { Container, Row } from "react-bootstrap"

function PageTitle(props) {
    return (
        <Container className="py-5" >
            <Row className="pt-4 px-2 d-flex flex-row justify-content-center">
                <h1>{props.title}</h1>
            </Row>
        </Container >
    )
}

export default PageTitle