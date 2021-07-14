import slugify from "../../utils/slugify"

function TocH2({ children }) {

    const path = "#" + slugify(children[0])

    return <li className="mb-2"><a href={path}>{children}</a></li>
}

export default TocH2



