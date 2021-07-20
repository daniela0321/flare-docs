import InsightCard from "./InsightCard"
import classes from "./InsightList.module.css"
import { Row } from "react-bootstrap"

function InsightList({ insights, activePage }) {

    const filteredInsights = insights.slice(((activePage - 1) * 12), (activePage * 12))

    return (
        <Row className="d-flex flex-row justify-content-center">
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