// External packages:
import React, { useMemo } from "react"
import { Pagination, Row } from "react-bootstrap"


// Pagination for collection:
export default function InsightsPagination({ amountOfPosts, handleClick, activePage }) {

    // Amount of pages needed to show the whole collection:
    const amountOfPages = Math.floor(amountOfPosts / 12) + 1

    // Create an array of the pagination items:
    // (When a pagination link is clicked, open the relevant page and indicate what page is active)
    const items = useMemo(() => {
        const itemsArray = []

        for (let number = 1; number <= amountOfPages; number++) {
            itemsArray.push(
                <Pagination.Item onClick={() => { handleClick(number) }} key={number} active={number === activePage}>
                    {number}
                </Pagination.Item>,
            )
        }
        return itemsArray
    }, [activePage, amountOfPages, handleClick]
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



