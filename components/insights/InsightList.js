// External packages:
import { Row } from "react-bootstrap"
// Internal components:
import InsightCard from "./InsightCard"


// A list or collection of posts:
export default function InsightList({ insights, activePage }) {

    // Sort posts based on 'revised' date (that has been converted to milliseconds):
    const sortedInsights = insights.sort((a, b) => (b.revisedMs - a.revisedMs))

    // Only include posts for current page (pagination):
    const filteredInsights = sortedInsights.slice(((activePage - 1) * 12), (activePage * 12))

    // Return post cards for current page:
    return (
        <Row className="mt-3 d-flex flex-row justify-content-center align-items-stretch">
            {
                filteredInsights.map((insight) => (
                    <InsightCard
                        key={insight.id}
                        id={insight.id}
                        image={insight.image}
                        title={insight.title}
                        excerpt={insight.excerpt}
                        buttonLink={insight.buttonLink}
                    />
                ))
            }
        </Row>
    )
}
