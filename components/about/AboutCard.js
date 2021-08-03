import { Card, Button } from "react-bootstrap"
import classes from "./AboutCard.module.css"
import AboutButton from "./AboutButton"

function AboutCard({ image, title, email, mobile, text1, text2, buttonname1, buttonname2 }) {
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
                <Card.Text className={classes.text1}>{text1}</Card.Text>
                <Card.Text className={classes.text2}>{text2}</Card.Text>
                {/* <AboutButton
                    buttonname={buttonname1}
                />
                <AboutButton
                    buttonname={buttonname2}
                /> */}
            </Card.Body>
        </Card>
    )
}

export default AboutCard