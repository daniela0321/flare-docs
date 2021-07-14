import slugify from "../../utils/slugify"

function TocH2({ children }) {

    const path = "#" + slugify(children[0])

    return <li><a href={path}>{children}</a></li>
}

export default TocH2



