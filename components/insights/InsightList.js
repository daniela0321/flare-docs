import InsightCard from "./InsightCard"

function InsightList(props) {
    return (
        <>
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
        </>
    )
}

export default InsightList