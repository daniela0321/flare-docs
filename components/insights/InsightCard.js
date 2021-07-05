import { Card, Button } from "react-bootstrap"

function InsightCard({ image, imageTitle, title, body, button }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={imageTitle} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <Button href="{button}" variant="primary">Read more</Button>
            </Card.Body>
        </Card>
    )
}

export default InsightCard