import classes from "./InfoCard.module.css"
import { Col } from "react-bootstrap"

// Props decomposed to get them with the autocomplete
function InfoCard({ image, imageTitle, title, description }) {
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

export default InfoCard