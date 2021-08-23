// Styles:
import styles from "./AboutCard.module.css"
// External packages:
import { Card } from "react-bootstrap"


// A card that includes information and image of one person:
export default function AboutCard({ image, imageAlt, title, email, mobile, children }) {

    return (
        <Card className="mb-3 mx-1">

            <div className="d-flex justify-content-center">
                <Card.Img
                    className={styles.image}
                    variant="top"
                    src={image}
                    alt={imageAlt}
                />
            </div>

            <Card.Body className="mb-4">
                <Card.Title className={styles.title}>{title}</Card.Title>
                <Card.Text className={styles.email}>{email}</Card.Text>
                <Card.Text className={styles.mobile}>{mobile}</Card.Text>
                <Card.Text className={styles.text} as="div">{children}</Card.Text>
            </Card.Body>

        </Card>
    )
}
