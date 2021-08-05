// Styles:
import classes from "./AboutCard.module.css"
// External packages:
import { Card } from "react-bootstrap"


// A card that includes information and image of one person:
export default function AboutCard({ image, title, email, mobile, children }) {

    return (
        <Card className="mb-3 mx-1">

            <div className="d-flex justify-content-center">
                <Card.Img
                    className={classes.image}
                    variant="top"
                    src={image}
                />
            </div>

            <Card.Body className="mb-4">
                <Card.Title className={classes.title}>{title}</Card.Title>
                <Card.Text className={classes.email}>{email}</Card.Text>
                <Card.Text className={classes.mobile}>{mobile}</Card.Text>
                <Card.Text className={classes.text}>{children}</Card.Text>
            </Card.Body>

        </Card>
    )
}
