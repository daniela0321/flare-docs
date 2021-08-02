import classes from "./InsightCard.module.css"
import { Card, Button } from "react-bootstrap"
import Link from 'next/link'

function InsightCard({ image, title, excerpt, buttonLink }) {

    return (
        <Link href={buttonLink} passHref>
            <a className={classes.cardlink}>
                <Card className="mx-2 mb-3 h-100" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={image} alt={title} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{excerpt}</Card.Text>
                        <Card.Text className="font-semi-bold text-info">Read more...</Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Link>
    )
}

export default InsightCard

