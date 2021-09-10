// Styles:
import styles from "./Sidebar.module.css"
// External packages:
import React from "react"
import { Col } from "react-bootstrap"
// Internal components:
import SidebarRight from "./SidebarRight"
import SidebarTop from "./SidebarTop"


export default function Sidebar({ children, bgClass }) {
    return (
        <>
            {/* Table of Contents on smaller screens: */}
            <Col className="m-0 p-0 d-xl-none">
                {/* Make this sticky later */}
                <SidebarTop>
                    {children}
                </SidebarTop>
            </Col>

            {/* Table of Contents on larger screens: */}
            <Col xl={{ span: 4, order: 2 }} className={`${styles[bgClass]} m-0 px-0 pt-0 pb-2 border-left d-none d-xl-block`}>
                <SidebarRight>
                    {children}
                </SidebarRight>
            </Col>
        </>
    )
}