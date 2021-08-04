import ReactMarkdown from "react-markdown"
import classes from "./SidebarRight.module.css"
import TableOfContents from "./TableOfContents"

function SidebarRight({ content }) {

    return (
        <aside className="mt-4 px-2 py-5 position-fixed d-none d-xl-block">
            <h6 className={classes.title}>Page Contents</h6>
            <div>
                <TableOfContents
                    content={content}
                />
            </div>
        </aside >
    )
}

export default SidebarRight