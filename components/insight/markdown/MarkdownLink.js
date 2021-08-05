import Link from "next/link"

// Open all markdown links in a new tab:
export default function MarkdownLink({ href, children }) {
    return <Link href={href}><a target="_blank">{children}</a></Link>
}
