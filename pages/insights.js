// External packages:
import React, { useState } from "react"
import { Container } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import PageTitle from "../components/layout/PageTitle"
import InsightList from "../components/insights/InsightList"
import InsightsPagination from "../components/insights/InsightsPagination"


// Import and export server side functions:
export { getStaticProps } from "../server/insights"


// Page with list or collection of posts:
export default function Insights(props) {

    // To control what the active pagination page is
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
            // canonical=
            // type=
            // image={{
            // url: 
            // alt:
            // }}
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
                        amountOfPosts={props.insights.length}
                        handleClick={handleClick}
                        activePage={activePage}
                    />
                </Container>
            </main>
        </>
    )
}
