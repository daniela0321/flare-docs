// External packages:
import { Container } from "react-bootstrap"
import { useRouter } from "next/router"
// Internal components:
import HeadMeta from "../../../components/head/HeadMeta"
import PageTitle from "../../../components/layout/PageTitle"
import InsightList from "../../../components/insights/InsightList"
import InsightsPagination from "../../../components/insights/InsightsPagination"


// Import and export server side functions:
export { getStaticPaths, getStaticProps } from "../../../server/insights/p/[page]"


// Page with list or collection of posts:
export default function Insights({ insights, totalPages }) {
    const router = useRouter()

    function handlePageChange(pageNum) {
        router.push('/insights/p/' + pageNum)
    }

    return (
        <>
            <HeadMeta
                title="Insights"
                description="Browse the list of Insights which address common frameworks and theories 
                used when building digital solutions"
                canonical={(router.query.page === '1') ? '/insights' : true}
            // algoliaIndexing=
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
                        insights={insights}
                    />
                    <InsightsPagination
                        amountOfPages={totalPages}
                        activePage={router.query.page}
                        onPageChange={handlePageChange}
                    />
                </Container>
            </main>
        </>
    )
}
