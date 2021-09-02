// External packages:
import { useState, useEffect } from 'react'
import { Row } from "react-bootstrap"
import { useRouter } from 'next/router'
import algoliasearch from 'algoliasearch/lite'
// Internal components:
import InsightCard from "../insights/InsightCard"


// Set up Algolia functionality:
const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
)
const index = searchClient.initIndex(
    process.env.NEXT_PUBLIC_ALGOLIA_INDEX
)


// Search results:        
export default function SearchResults() {

    const router = useRouter()
    const query = router.query.q
    const [results, setResults] = useState({ hits: [] })

    // Use the query parameter to search the index and then show the results
    // Update the results when the query parameter changes
    useEffect(() => {
        index.search(query, { hitsPerPage: 5000 })
            .then(response => setResults(response))
    }, [query])

    if (results.nbHits === 0 || !query) {
        return (
            <Row className="mx-2 d-flex justify-content-center">
                <div>
                    <h4 className="mb-5">Sorry, no results found.</h4>
                    <h6>Search help</h6>
                    <ul>
                        <li>Check your search for typos.</li>
                        <li>Use more generic search terms.</li>
                    </ul>
                </div>
            </Row>
        )
    } else {
        return (
            <Row className="mt-3 mb-5 d-flex flex-row justify-content-center align-items-stretch">
                {
                    results.hits.map((res) => (
                        <InsightCard
                            key={res.url}
                            // id={res.url}
                            image={res.image}
                            title={res.title}
                            excerpt={res.description}
                            buttonLink={res.url}
                        />
                    ))
                }
            </Row>
        )
    }
}



