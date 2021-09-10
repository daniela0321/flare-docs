// External packages:
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Form, FormControl, Button, InputGroup } from "react-bootstrap"


// Search field:
export default function SearchField({ onSearch: handleButtonClick }) {

    const router = useRouter()

    // On submitting the search form, the user should be redirected 
    // to the search page with a query parameter that contains the search.
    function handleSubmit(event) {
        event.preventDefault()
        const query = event.target.elements.query.value

        handleButtonClick()

        router.push({
            pathname: '/search',
            query: { q: query },
        })
    }

    return (
        <Form inline onSubmit={handleSubmit} className="mt-2 mb-3 mt-lg-1 mb-lg-1">
            <InputGroup>
                <FormControl
                    name="query"
                    type="text"
                    placeholder="Search for Insights"
                    className="mt-2 mt-lg-0"
                />
                <InputGroup.Append>
                    <Button type="submit" variant="outline-light" className="mt-2 mt-lg-0">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}