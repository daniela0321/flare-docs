import Link from "next/link"

function MarkdownLink({ href, children }) {

    // With react-markdown, a (link) will get href prop
    return <Link href={href}><a>{children}</a></Link>
}

export default MarkdownLink