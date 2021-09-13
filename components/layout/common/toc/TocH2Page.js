// This is being used for portfolio and services pages until I
// create new Table of Content component for them.

// Create a clickable list item from the h2 heading with a certain style:
export default function TocH2Page({ path, children }) {
    return <li className="mb-2 mt-3 reduce-lineheight">
        <a href={path} className="sidelink">
            {children}
        </a>
    </li>
}

