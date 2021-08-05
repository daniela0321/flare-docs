import { Container } from "react-bootstrap"

export default function TextContainer({ children }) {
    return (
        <Container className="textContainer">
            {children}
        </Container>
    )
}