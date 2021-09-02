// External packages:
import React, { useMemo } from "react"
import { Pagination, Row } from "react-bootstrap"


// Pagination for collection:
export default function InsightsPagination({ amountOfPages, onPageChange: handlePageChange, activePage }) {

    // Create an array of the pagination items:
    // (When a pagination link is clicked, open the relevant page and indicate what page is active)
    const items = useMemo(() => {
        const itemsArray = []

        for (let pageNum = 1; pageNum <= amountOfPages; pageNum++) {
            itemsArray.push(
                <Pagination.Item onClick={() => { handlePageChange(pageNum) }} key={pageNum} active={pageNum == activePage}>
                    {pageNum}
                </Pagination.Item>,
            )
        }
        return itemsArray
    }, [activePage, amountOfPages, handlePageChange]
    )

    // Return the pagination items:
    return (
        <Row className="my-5 d-flex flex-row justify-content-center">
            <nav aria-label="Search results pages">
                <Pagination>{items}</Pagination>
            </nav>
        </Row>
    )
}



