import slugify from "../../utils/slygify"

function H3WithId({ children }) {

    const slug = slugify(children[0])

    return <h3 id={slug}>{children}</h3>
}

export default H3WithId