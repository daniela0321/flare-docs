import slugify from "../../../utils/slugify"

// Slugify h3 heading and add that as an ID to the heading:
export default function H3WithId({ children }) {
    const slug = slugify(children[0])
    return <h3 id={slug}>{children}</h3>
}
