// Styles:
import styles from "./InsightCard.module.css"
// External packages:
import Link from 'next/link'
import { Card } from "react-bootstrap"
import Image from "../layout/Image"


// A clickable card which includes a short introduction of a post:
export default function InsightCard({ image, title, excerpt, buttonLink }) {
    return (
        <Link href={buttonLink} passHref>
            <a className={styles.cardlink}>
                <Card className="mx-2 mb-3 h-100" style={{ width: '22rem' }}>
                    <div className={styles.placeholder}>
                        <Image
                            className="card-img-top"
                            src={image}
                            alt={title}
                            srcSizes={[400]}
                        />
                    </div>
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


