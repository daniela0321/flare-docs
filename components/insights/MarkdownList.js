import classes from "./MarkdownList.module.css"

function MarkdownList({ children }) {
    return (
        <ul className={classes.list}>{children}</ul>
    )
}

export default MarkdownList