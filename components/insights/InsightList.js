import InsightCard from "./InsightCard"
import classes from "./InsightList.module.css"
import { Row } from "react-bootstrap"

function InsightList(props) {
    return (
        <Row className="d-flex flex-row justify-content-center">
            {
                props.insights.map((insight) => (
                    <InsightCard
                        key={insight.id}
                        id={insight.id}
                        image={insight.image}
                        title={insight.title}
                        body={insight.body}
                        buttonLink={insight.buttonLink}
                    />
                ))
            }
        </Row>
    )
}

export default InsightList