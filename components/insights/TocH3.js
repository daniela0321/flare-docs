import slugify from "../../utils/slugify"

function TocH3({ children }) {

    const path = "#" + slugify(children[0])

    return <li className="mb-2 text-muted small-font reduce-lineheight"><a href={path} className="sidelink">{children}</a></li>
}

export default TocH3

