import { Card, Button } from "react-bootstrap"
import classes from "./AboutCard.module.css"

function AboutCard({ image, title, email, mobile, text, button }) {
    return (
        <Card className="mb-3">
            <div className="d-flex justify-content-center">
                <Card.Img
                    className={classes.image}
                    variant="top"
                    src={image}
                />
            </div>
            <Card.Body>
                <Card.Title className={classes.title}>{title}</Card.Title>
                <Card.Text className={classes.email}>{email}</Card.Text>
                <Card.Text className={classes.mobile}>{mobile}</Card.Text>
                <Card.Text className={classes.text}>{text}</Card.Text>
                {/* Create button component for GitHub, portfolio and LinkedIn */}
                <div className="d-flex justify-content-center">
                    <Button variant="primary" size="lg" className={classes.button}>{button}</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default AboutCard