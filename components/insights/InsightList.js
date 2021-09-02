// External packages:
import { Row } from "react-bootstrap"
// Internal components:
import InsightCard from "./InsightCard"


// A list or collection of posts:
export default function InsightList({ insights }) {

    // Return post cards for current page:
    return (
        <Row className="mt-3 d-flex flex-row justify-content-center align-items-stretch">
            {
                insights.map((insight) => (
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
