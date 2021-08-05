import React from "react"
import { Pagination, Row } from "react-bootstrap"

// Pagination for post list or collection:
export default function InsightsPagination({ amountOfFiles, handleClick, activePage }) {

    const items = []
    const amountOfPages = Math.floor(amountOfFiles / 12) + 1

    // Create an array of the pagination items:
    // (When a pagination link is clicked, open the relevant page and indicate what page is active)
    for (let number = 1; number <= amountOfPages; number++) {
        items.push(
            <Pagination.Item onClick={() => { handleClick(number) }} key={number} active={number === activePage}>
                {number}
            </Pagination.Item>,
        )
    }

    // Return the pagination items:
    return (
        <Row className="my-5 d-flex flex-row justify-content-center">
            <nav aria-label="Search results pages">
                <Pagination>{items}</Pagination>
            </nav>
        </Row>
    )
}



