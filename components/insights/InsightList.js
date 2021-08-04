import InsightCard from "./InsightCard"
import { Row } from "react-bootstrap"

function InsightList({ insights, activePage }) {

    // Sort Insights based on 'revised' date that has been converted to milliseconds
    const sortedInsights = insights.sort((a, b) => (b.revisedMs - a.revisedMs))

    // Only return insights for current page
    const filteredInsights = sortedInsights.slice(((activePage - 1) * 12), (activePage * 12))

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

export default InsightList