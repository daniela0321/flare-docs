// External packages:
import React, { useState } from "react"
import { Container } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/layout/HeadMeta"
import PageTitle from "../components/layout/PageTitle"
import InsightList from "../components/insights/InsightList"
import InsightsPagination from "../components/insights/InsightsPagination"


// Import and export server side functions:
export { getStaticProps } from "../server/insights"


// Page with list or collection of posts:
export default function Insights(props) {

    const [activePage, setActivePage] = useState(1)

    function handleClick(newActivePage) {
        setActivePage(newActivePage)
    }

    return (
        <>
            <HeadMeta
                title="Insights"
                description="Browse the list of Insights which address common frameworks and theories 
                used when building digital solutions"
            />

            <main>
                <PageTitle
                    title="Insights"
                />

                <Container>
                    <InsightList
                        insights={props.insights}
                        activePage={activePage}
                    />
                    <InsightsPagination
                        amountOfFiles={props.insights.length}
                        handleClick={handleClick}
                        activePage={activePage}
                    />
                </Container>
            </main>
        </>
    )
}
