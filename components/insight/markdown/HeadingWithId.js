// Internal modules:
import slugify from "../../../utils/slugify"


// Slugify heading and add that as an ID to the heading:
export default function HeadingWithId({ level, children }) {

    // Create heading tag based on level coming from Markdown
    const Tag = 'h' + level

    // Create slug if heading has text
    const headingText = Array.isArray(children) ? children[0] : children
    const slug = headingText ? slugify(headingText) : ''

    return <Tag id={slug}>{children}</Tag>
}
