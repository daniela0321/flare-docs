// External packages:
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import Sidebar from '../components/layout/common/toc/Sidebar'
import TocForPage from '../components/layout/common/toc/TocForPage'
import TocH2 from "../components/layout/common/toc/TocH2"
import TocH3 from "../components/layout/common/toc/TocH3"
import PageContent from '../components/layout/common/PageContent'


// Portfolio page:
export default function Portfolio() {

    return (
        <>
            <HeadMeta
                title="Portfolio"
                description="Examples of our work"
                canonical="true"
            // algoliaIndexing=
            // type=
            // image={{
            // url: 
            // alt:
            // }}
            />

            <Container className="m-0 p-0" fluid>

                <Row className="m-0 p-0">

                    {/* Table of Contents sidebar
                    (on the rigth side with bigger screen, and at the top with smaller screen) */}
                    {/* // Later, create a script to fetch page titles automatically */}
                    <Sidebar
                        bgClass="bgWhite"
                    >
                        <TocForPage>
                            <li>
                                <TocH2>
                                    1. Knowledge Base
                                </TocH2>
                            </li>
                            <li>
                                <TocH3>
                                    1.1 yyy
                                </TocH3>
                            </li>
                            <li>
                                <TocH3>
                                    1.2 yyy
                                </TocH3>
                            </li>
                            <li>
                                <TocH3>
                                    1.3 yyy
                                </TocH3>
                            </li>
                            <li>
                                <TocH2>
                                    2. xxx
                                </TocH2>
                            </li>
                            <li>
                                <TocH3>
                                    2.1 yyy
                                </TocH3>
                            </li>
                            <li>
                                <TocH3>
                                    2.2 yyy
                                </TocH3>
                            </li>
                            <li>
                                <TocH3>
                                    2.3 yyy
                                </TocH3>
                            </li>
                            <li>
                                <TocH2>
                                    3. xxx
                                </TocH2>
                            </li>
                            <li>
                                <TocH3>
                                    3.1 yyy
                                </TocH3>
                            </li>
                            <li>
                                <TocH3>
                                    3.2 yyy
                                </TocH3>
                            </li>
                            <li>
                                <TocH3>
                                    3.3 yyy
                                </TocH3>
                            </li>
                        </TocForPage>
                    </Sidebar>

                    {/* Page content: */}
                    <PageContent>
                        <div>

                            <div className="mb-5 d-flex flex-row justify-content-center text-center">
                                <h1>Our Work</h1>
                            </div>

                            <p>Our Ways of Working - move to second pageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>

                            <h2 id="knowledge-base">1. Knowledge Base</h2>
                            <h3>1.1 About</h3>
                            <h3>1.2 Architecture</h3>
                            <h3>1.3 Used Technologies?</h3>

                            <h2>2. xx Plugin</h2>
                            <h3>2.1 About</h3>
                            <h3>2.2 Architecture</h3>
                            <h3>2.3 Used Technologies?</h3>

                            <h2>3. xxx Coming</h2>
                            <h3>3.1 About</h3>
                            <h3>3.2 Architecture</h3>
                            <h3>3.3 Used Technologies?</h3>

                        </div>
                    </PageContent>

                </Row>
            </Container>
        </>
    )
}
