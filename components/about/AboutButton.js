import classes from "./AboutButton.module.css"
import { Button } from "react-bootstrap"

// 'See our work' button:
export default function AboutButton({ buttonname }) {
    return (
        <div className="d-flex justify-content-center">
            <Button variant="outline-primary" className={classes.button}>{buttonname}</Button>
        </div>
    )
}