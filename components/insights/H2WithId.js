import slugify from "../../utils/slygify"

function H2WithId({ children }) {

    const slug = slugify(children[0])

    return <h2 id={slug}>{children}</h2>
}

export default H2WithId