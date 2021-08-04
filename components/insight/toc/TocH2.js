import slugify from "../../../utils/slugify"

function TocH2({ children }) {

    const path = "#" + slugify(children[0])

    return <li className="mb-2 mt-3 reduce-lineheight"><a href={path} className="sidelink">{children}</a></li>
}

export default TocH2



