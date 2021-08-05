// Internal modules:
import slugify from "../../../utils/slugify"


// Slugify h2 heading and add that as an ID to the heading:
export default function H2WithId({ children }) {
    const slug = slugify(children[0])
    return <h2 id={slug}>{children}</h2>
}
