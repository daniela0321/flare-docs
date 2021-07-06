import classes from "./SidebarRight.module.css"
import InsightContents from "./InsightContents"

function SidebarRight() {
    return (
        <aside className="m-0 px-2 py-5 d-none d-xl-block">
            <h5 className={classes.title}>Page Contents</h5>
            <InsightContents />
        </aside>
    )
}

export default SidebarRight