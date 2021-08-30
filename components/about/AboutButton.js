// Styles:
import styles from "./AboutButton.module.css"
// External packages:
import Link from "next/link"


// 'See our work' button:
export default function AboutButton({ link, buttonname }) {
    return (
        <div className="d-flex justify-content-center">
            <Link href={link}>
                <a className={`${styles.button} btn btn-outline-primary`}>
                    {buttonname}
                </a>
            </Link>
        </div>
    )
}