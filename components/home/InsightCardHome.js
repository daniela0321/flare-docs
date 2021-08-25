// Styles:
import styles from "./InsightCardHome.module.css"
// External packages:
import { Button, Row, Col } from 'react-bootstrap'
import Image from "../layout/Image"


// An info card to give a high-level view to the content of the site:
export default function InsightCardHome({ image, imageTitle, title, button, amountAndTime, textFirst }) {

    const imageColumnOrder = { span: 6, order: textFirst ? 2 : 1 }
    const textColumnOrder = { span: 6, order: textFirst ? 1 : 2 }

    return (
        <Row className="m-0 p-0">

            <Col lg={imageColumnOrder} className="m-0 p-0">
                <Image
                    className={styles.imageStyle}
                    src={image}
                    alt={imageTitle}
                    srcSizes={[375, 750, 1500, 3000]}
                    defaultSize="1500"
                    sizes="(min-width: 992px) 50vw, 100vw"
                />
            </Col>

            <Col lg={textColumnOrder} className="m-0 py-0 px-5 bg-primary d-flex flex-column justify-content-center align-items-center" >
                <h3 className={styles.title}>{title}</h3>
                <Button href={button} variant="light" className={styles.button}>Read more</Button>
                <p className={styles.amountAndTime}>{amountAndTime}</p>
            </Col>

        </Row>
    )
}


