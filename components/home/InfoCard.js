// Styles:
import styles from "./InfoCard.module.css"
// External packages:
import { Col } from "react-bootstrap"
// Internal components
import Image from "../layout/common/Image"


// An info card to be used to explain the benefits of the service:
export default function InfoCard({ image, imageTitle, title, description }) {
    return (
        <Col md={12} lg={4} className="p-3 d-flex flex-column align-items-center">
            <Image
                src={image}
                alt={imageTitle}
                className={styles.roundImage}
                srcSizes={[150, 300]}
                sizes="(min-resolution: 192dpi) 300px, 150px"
            />
            <h2>{title}</h2>
            <p className={styles.paragraphWidth}>
                {description}
            </p>
        </Col>
    )
}
