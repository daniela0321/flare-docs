import { Container, Row } from "react-bootstrap"

function PageTitle(props) {
    return (
        <Container className="m=0 p-5 d-flex flex-row justify-content-center" >
            <Row>
                <h1>{props.title}</h1>
            </Row>
        </Container >
    )
}

export default PageTitle