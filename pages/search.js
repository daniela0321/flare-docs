// Styles:
import styles from "../styles/Search.module.css"
// External packages:
import { useRouter } from 'next/router'
import { Container } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import PageTitle from "../components/layout/PageTitle"
import SearchResults from "../components/layout/SearchResults"


// Page with search results:
export default function Search() {

    const router = useRouter()
    const query = router.query.q

    return (
        <>
            <HeadMeta
                title="Search results"
                description="Search results found"
            // canonical=
            // type=
            // image={{
            // url: 
            // alt:
            // }}
            />

            <main>
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

