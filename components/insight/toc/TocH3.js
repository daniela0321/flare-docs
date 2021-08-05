// Internal modules:
import slugify from "../../../utils/slugify"


// Create a clickable list item from the h3 heading with a certain style:
export default function TocH3({ children }) {
    const path = "#" + slugify(children[0])
    return <li className="mb-2 text-muted small-font reduce-lineheight"><a href={path} className="sidelink">{children}</a></li>
}


