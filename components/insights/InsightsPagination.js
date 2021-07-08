import { Pagination, Row } from "react-bootstrap"
import React from "react"

function InsightsPagination({ amountOfFiles, handleClick, activePage }) {

    const items = []
    const amountOfPages = Math.floor(amountOfFiles / 12) + 1


    for (let number = 1; number <= amountOfPages; number++) {
        items.push(
            <Pagination.Item onClick={() => { handleClick(number) }} key={number} active={number === activePage}>
                {number}
            </Pagination.Item>,
        )
    }

    return (
        <Row className="my-5 d-flex flex-row justify-content-center">
            <Pagination>{items}</Pagination>
        </Row>
    )
}



export default InsightsPagination


