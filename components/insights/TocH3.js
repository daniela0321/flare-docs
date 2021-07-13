import classes from "./TocH3.module.css"

function TocH3({ children }) {
    return <li className={classes.h3}>{children}</li>
}

export default TocH3