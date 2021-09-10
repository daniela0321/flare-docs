// Styles:
import styles from "../styles/Search.module.css"
// External packages:
import { useRouter } from 'next/router'
import { Container } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import PageTitle from "../components/layout/common/PageTitle"
import SearchResults from "../components/search/SearchResults"
import Image from "../components/layout/common/Image"


// Page with search results:
export default function Search() {

    const router = useRouter()
    const query = router.query.q

    return (
        <>
            <HeadMeta
                title="Search results"
                description="Search results found"
                canonical="true"
            // algoliaIndexing=
            // type=
            // image={{
            // url: 
            // alt:
            // }}
            />

            <main>

                <Container fluid className="position-relative">
                    <Image className={styles.algolia}
                        src="/images/search/search-by-algolia-light-background.svg"
                        alt="Search by Algolia"
                        srcSizes={[1000]}
                    />
                </Container>

                <PageTitle
                    title="Search Results"
                />
                <h4 className="mt-n5 mb-5 mx-2 text-center">for &quot;{query}&quot;</h4>

                <Container className={styles.results}>
                    <SearchResults />
                </Container>

            </main>
        </>
    )
}

