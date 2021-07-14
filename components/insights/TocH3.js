import classes from "./TocH3.module.css"
import slugify from "../../utils/slugify"

function TocH3({ children }) {

    const path = "#" + slugify(children[0])

    return <li className="ml-3 mb-2"><a href={path}>{children}</a></li>
}

export default TocH3

