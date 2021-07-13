import ReactMarkdown from "react-markdown"
import classes from "./SidebarRight.module.css"
import TableOfContents from "./TableOfContents"

function SidebarRight({ content }) {

    return (
        <aside className="m-0 px-2 py-5 d-none d-xl-block">
            <h5 className={classes.title}>Page Contents</h5>
            <div>
                <TableOfContents
                    content={content}
                />
            </div>
        </aside >
    )
}

export default SidebarRight