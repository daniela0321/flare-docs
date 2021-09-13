// This is being used for portfolio and services pages until I
// create new Table of Content component for them.

// Create a clickable list item from the h3 heading with a certain style:
export default function TocH3({ path, children }) {
    return <li className="ml-3 mb-2 small-font reduce-lineheight">
        <a href={path} className="sidelink">
            {children}
        </a>
    </li>
}


