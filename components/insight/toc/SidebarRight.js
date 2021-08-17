// Styles:
import classes from "./SidebarRight.module.css"
// Internal components:
import TableOfContents from "./TableOfContents"


// Fixed sidebar including Page Contents (used on a bigger screen):
export default function SidebarRight({ content }) {
    return (
        <aside className={`${classes.toc} px-2 py-5`} >
            <h6 className={classes.title}>Page Contents</h6>
            <div>
                <TableOfContents
                    content={content}
                />
            </div>
        </aside>
    )
}
