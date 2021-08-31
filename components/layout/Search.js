// Styles:
// (Include the full Satellite theme for Search)
import 'instantsearch.css/themes/satellite.css';
// External packages:
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'


// The credentials below are: 
// - Unique application ID and 
// - Search-Only API Key (the public API key to use in the frontend code)
const searchClient = algoliasearch('WH8FSYE3IB', '466a9536c2ef34c62c0635698a3f5bd3')


// Search box and search results:
export default function Search() {
    return (
        <InstantSearch searchClient={searchClient} indexName="instant_search">
            <SearchBox />
            <Hits />
        </InstantSearch>
    )
}

