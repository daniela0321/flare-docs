// Styles:
import classes from "./InsightCardHome.module.css"
// External packages:
import { Button, Row, Col } from 'react-bootstrap'


// An info card to give a high-level view to the content of the site:
export default function InsightCardHome({ image, imageTitle, title, button, amountAndTime, textFirst }) {

    const imageColumnOrder = { span: 6, order: textFirst ? 2 : 1 }
    const textColumnOrder = { span: 6, order: textFirst ? 1 : 2 }

    return (
        <Row className="m-0 p-0">

            <Col lg={imageColumnOrder} className="m-0 p-0">
                <img
                    className={classes.imageStyle}
                    src={image}
                    alt={imageTitle}
                />
            </Col>

            <Col lg={textColumnOrder} className="m-0 py-0 px-5 bg-primary d-flex flex-column justify-content-center align-items-center" >
                <h3 className={classes.title}>{title}</h3>
                <Button href={button} variant="light" className={classes.button}>Read more</Button>
                <p className={classes.amountAndTime}>{amountAndTime}</p>
            </Col>

        </Row>
    )
}


