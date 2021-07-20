// import { useRouter } from "next/router"
import { Card, Button } from "react-bootstrap"
import ReactMarkdown from 'react-markdown'

function InsightCard({ image, title, excerpt, buttonLink }) {

    return (
        <Card className="mx-2 mb-3" style={{ width: '22rem' }}>
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{excerpt}</Card.Text>
                <Button href={buttonLink} variant="primary">Read more</Button>
            </Card.Body>
        </Card>
    )
}

export default InsightCard

