// Styles:
import styles from "./SidebarRight.module.css"
// Internal components:
import TableOfContents from "./TableOfContents"


// Fixed sidebar including Page Contents (used on a bigger screen):
export default function SidebarRight({ content }) {
    return (
        <aside className={`${styles.toc} px-2 py-5`} >
            <h6 className={styles.title}>Page Contents</h6>
            <div>
                <TableOfContents
                    content={content}
                />
            </div>
        </aside>
    )
}
