// External packages:
import Link from "next/link"


// Markdown links:
export default function MarkdownLink({ href, children }) {

    if (href.startsWith("http")) {
        // External link
        return <a href={href} target="_blank" rel="noopener">{children}</a>
    } else {
        // Internal link
        return <Link href={href}><a>{children}</a></Link>
    }
}
