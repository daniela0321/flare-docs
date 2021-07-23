import ReactMarkdown from 'react-markdown'
import TocH2 from "./TocH2"
import TocH3 from "./TocH3"

function TableOfContents({ content }) {
    return (
        <ul className="ml-4 nomarker">
            <ReactMarkdown
                allowedElements={['h2', 'h3']}
                components={{
                    h2: TocH2,
                    h3: TocH3,
                }}
            >
                {content}
            </ReactMarkdown>
        </ul>
    )
}

export default TableOfContents