// Internal components:
// import TocH2 from "./TocH2"
// import TocH3 from "./TocH3"


// Later, create a script to fetch page titles automatically

// Table of Contents for a normal page:
export default function TocForPage({ children }) {
    return (
        <ul className="ml-0 pl-0 nomarker">
            {children}
        </ul>
    )
}


