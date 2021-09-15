// Internal modules:
import slugify from "../../../../utils/slugify"


// Create a clickable list item from the h2 heading with a certain style:
export default function TocH2({ children }) {

    const headingText = Array.isArray(children) ? children[0] : children
    const path = "#" + slugify(headingText)

    return <li className="mb-2 mt-3 reduce-lineheight">
        <a href={path} className="sidelink">
            {children}
        </a>
    </li>
}

