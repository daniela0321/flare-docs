// Styles:
import classes from "./InfoCard.module.css"
// External packages:
import { Col } from "react-bootstrap"


// An info card to be used to explain the benefits of the service:
export default function InfoCard({ image, imageTitle, title, description }) {
    return (
        <Col md={12} lg={4} className="p-3 d-flex flex-column align-items-center">
            <img
                src={image}
                alt={imageTitle}
                className={classes.roundImage}
            />
            <h2>{title}</h2>
            <p className={classes.paragraphWidth}>
                {description}
            </p>
        </Col>
    )
}
