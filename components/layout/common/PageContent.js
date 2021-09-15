// External packages:
import React from "react"
import { Col } from "react-bootstrap"


// Page content template for page which includes Table of Contents
export default function PageContent({ children }) {
    return (
        // <Col xl={{ span: 8, order: 1 }} className="mt-2 mb-5 py-5 px-4 d-flex flex-column align-items-center">
        <Col xl={{ span: 8, order: 1 }} className="mt-4 mb-5 py-5 d-flex flex-column align-items-center">
            <main className="maxWidth">
                {children}
            </main>
        </Col>
    )
}