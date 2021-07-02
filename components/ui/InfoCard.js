import classes from "./InfoCard.module.css"
import { Col } from "react-bootstrap"

function InfoCard(props) {
    return (
        <Col md={12} lg={4} className="p-3 d-flex flex-column align-items-center">
            <img
                src={props.image}
                alt={props.imageTitle}
                className={classes.roundImage}
            />
            <h2>{props.title}</h2>
            <p className={classes.paragraphWidth}>
                {props.description}
            </p>
        </Col>
    )
}

export default InfoCard