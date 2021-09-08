// Styles:
import styles from "./SidebarRight.module.css"
// Internal components:
import TableOfContents from "./TableOfContents"


// Fixed sidebar including Page Contents (used on a bigger screen):
export default function SidebarRight({ content }) {
    return (
        <aside className={`${styles.toc} px-2 py-5`} >
            <h6 className="mt-5 mb-4 ml-4 mr-1">Page Contents</h6>
            <div className="ml-4">
                <TableOfContents
                    content={content}
                />
            </div>
        </aside>
    )
}
