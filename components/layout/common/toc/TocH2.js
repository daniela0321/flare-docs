// Internal modules:
import slugify from "../../../../utils/slugify"


// Create a clickable list item from the h2 heading with a certain style:
export default function TocH2({ children }) {
    const path = "#" + slugify(children[0])
    return <li className="mb-2 mt-3 reduce-lineheight">
        <a href={path} className="sidelink">
            {children}
        </a>
    </li>
}

