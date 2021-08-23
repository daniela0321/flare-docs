// Styles:
import styles from "./AboutButton.module.css"
// External packages:
import { Button } from "react-bootstrap"


// 'See our work' button:
export default function AboutButton({ buttonname }) {
    return (
        <div className="d-flex justify-content-center">
            <Button variant="outline-primary" className={styles.button}>{buttonname}</Button>
        </div>
    )
}