// External packages:
import React from "react"
import Link from 'next/link'
import { Container, Row } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import Sidebar from '../components/layout/common/toc/Sidebar'
import TocForPage from '../components/layout/common/toc/TocForPage'
import TocH2Page from "../components/layout/common/toc/TocH2Page"
import TocH3Page from "../components/layout/common/toc/TocH3Page"
import TocPageTitle from "../components/layout/common/TocPageTitle"
import PageContent from '../components/layout/common/PageContent'
import Image from "../components/layout/common/Image"


// Services page:
export default function Services() {

    return (
        <>
            <HeadMeta
                title="Services"
                description="What kinds of services we can offer"
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

                            <TocH2Page path="#requirements">
                                1. Pre-Studies and Requirements Analysis
                            </TocH2Page>

                            <TocH3Page path="#">
                                1.1 Experience and Focus Areas
                            </TocH3Page>
                            <TocH3Page path="#">
                                1.2 Tools and Technologies
                            </TocH3Page>
                            <TocH3Page path="#">
                                1.3 Our Approach
                            </TocH3Page>

                            <TocH2Page path="#design">
                                2. Functional and Architectural Design
                            </TocH2Page>

                            <TocH3Page path="#">
                                2.1 Experience and Focus Areas
                            </TocH3Page>
                            <TocH3Page path="#">
                                2.2 Tools and Technologies
                            </TocH3Page>
                            <TocH3Page path="#">
                                2.3 Our Approach
                            </TocH3Page>

                            <TocH2Page path="#development">
                                3. Software Development
                            </TocH2Page>

                            <TocH3Page path="#">
                                3.1 Experience and Focus Areas
                            </TocH3Page>
                            <TocH3Page path="#">
                                3.2 Tools and Technologies
                            </TocH3Page>
                            <TocH3Page path="#">
                                3.3 Our Approach
                            </TocH3Page>

                            <TocH2Page path="#technical-writing">
                                4. Technical Writing
                            </TocH2Page>

                            <TocH3Page path="#">
                                4.1 Experience and Focus Areas
                            </TocH3Page>
                            <TocH3Page path="#">
                                4.2 Tools and Technologies
                            </TocH3Page>
                            <TocH3Page path="#">
                                4.3 Our Approach
                            </TocH3Page>

                        </TocForPage>
                    </Sidebar>

                    {/* Page content: */}
                    <PageContent>
                        <div>

                            <TocPageTitle
                                title="Our Services"
                            />

                            <p><b><i>Add below your unique selling points and validators
                                (past work and/or skills, links to portfolio and past projects).</i></b></p>

                            <h2 id="requirements">1. Pre-Studies and Requirements Analysis</h2>
                            <h3>1.1 Experience and Focus Areas</h3>
                            <h3>1.2 Tools and Technologies</h3>
                            <h3>1.3 Our Approach</h3>

                            <h2 id="design">2. Functional and Architectural Design</h2>
                            <h3>2.1 Experience and Focus Areas</h3>
                            <h3>2.2 Tools and Technologies</h3>
                            <h3>2.3 Our Approach</h3>

                            <h2 id="development">3. Software Development</h2>
                            <h3>3.1 Experience and Focus Areas</h3>
                            <h3>3.2 Tools and Technologies</h3>
                            <h3>3.3 Our Approach</h3>

                            <h2 id="technical-writing">4. Technical Writing</h2>
                            <h3>4.1 Experience and Focus Areas</h3>
                            <h3>4.2 Tools and Technologies</h3>
                            <h3>4.3 Our Approach</h3>

                        </div>
                    </PageContent>

                </Row>
            </Container>
        </>
    )
}
