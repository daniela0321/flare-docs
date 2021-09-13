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


// Portfolio page:
export default function Portfolio() {

    return (
        <>
            <HeadMeta
                title="Portfolio"
                description="Samples of our work"
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

                            <TocH2Page path="#knowledge-base">
                                1. Knowledge Base
                            </TocH2Page>

                            <TocH3Page path="#knowledge-base-challenge">
                                1.1 The Challenge
                            </TocH3Page>
                            <TocH3Page path="#knowledge-base-architecture">
                                1.2 Architecture
                            </TocH3Page>
                            <TocH3Page path="#knowledge-base-technologies">
                                1.3 Used Technologies
                            </TocH3Page>
                            <TocH3Page path="#knowledge-base-responsibilities">
                                1.4 Main Responsibilities
                            </TocH3Page>

                            <TocH2Page path="#electron-plugin">
                                2. Electron Plugin
                            </TocH2Page>

                            <TocH3Page path="#electron-plugin-challenge">
                                2.1 The Challenge
                            </TocH3Page>
                            <TocH3Page path="#electron-plugin-architecture">
                                2.2 Architecture
                            </TocH3Page>
                            <TocH3Page path="#electron-plugin-technologies">
                                2.3 Used Technologies
                            </TocH3Page>
                            <TocH3Page path="#electron-plugin-responsibilities">
                                2.4 Main Responsibilities
                            </TocH3Page>

                            <TocH2Page path="#open-data-service">
                                3. Open Data Service - Coming
                            </TocH2Page>

                            <TocH3Page path="#open-data-service-challenge">
                                3.1 The Challenge
                            </TocH3Page>
                            <TocH3Page path="#open-data-service-architecture">
                                3.2 Architecture
                            </TocH3Page>
                            <TocH3Page path="#open-data-service-technologies">
                                3.3 Used Technologies
                            </TocH3Page>
                            <TocH3Page path="#open-data-service-responsibilities">
                                3.4 Main Responsibilities
                            </TocH3Page>

                        </TocForPage>
                    </Sidebar>

                    {/* Page content: */}
                    <PageContent>
                        <div>

                            <TocPageTitle
                                title="Samples of Our Work"
                            />

                            <p><b><i>Describe the process for each project: use this space as a way to
                                communicate your thinking and explain certain design or technical choices you made.</i></b></p>

                            <h2 id="knowledge-base">1. Knowledge Base</h2>

                            <p><Link href="/"><a><b>Flarehub.io</b></a></Link> is our site which
                                includes a growing knowledge base on how to build value-adding digital
                                solutions.</p>

                            {/* Check image settings + images as modal*/}
                            <Image
                                src="/images/portfolio/knowledge-base.jpg"
                                alt="Flarehub.io Knowledge Base"
                                className="mt-3 mw-100"
                                sizes="(min-width: 796px) 700px, 80vw"
                                lazy="false"
                            />

                            <h3 id="knowledge-base-challenge">1.1 The Challenge</h3>

                            <p>The previous flarehub.io site was implemented with WordPress:</p>
                            <ul>
                                <li>Customizing possibilities were limited</li>
                                <li>The solution included multiple heavy third-party plugins
                                    adding the time required for testing</li>
                                <li>The deployment process was time-taking and complicated</li>
                            </ul>

                            <p>The goal was to replace the WordPress implementation with a solution which
                                would be easy to:</p>
                            <ul>
                                <li>Maintain and deploy</li>
                                <li>Customize (e.g. the template for Insights)</li>
                                <li>Scale</li>
                            </ul>

                            <p>In addition, it was important the the performance...</p>

                            <h3 id="knowledge-base-architecture">1.2 Architecture</h3>

                            <p>The sitemap of the knowledge base:</p>

                            {/* Check image settings + images as modal + DRAW SITEMAP*/}
                            <Image
                                src="/images/portfolio/temp.jpg"
                                alt="Flarehub.io sitemap"
                                className="mt-3 mw-100"
                                sizes="(min-width: 796px) 700px, 80vw"
                                lazy="true"
                            />

                            <p>The application architecture of the knowledge base:</p>

                            {/* Check image settings + images as modal + DRAW ARCH IMAGE*/}
                            <Image
                                src="/images/portfolio/temp-2.png"
                                alt="Flarehub.io architecture"
                                className="mt-3 mw-100"
                                sizes="(min-width: 796px) 700px, 80vw"
                                lazy="true"
                            />

                            <h3 id="knowledge-base-technologies">1.3 Used Technologies</h3>

                            <p>xxxxx (what to put below and in which order):</p>
                            <ul>
                                <li>React and Next.js</li>
                                <li>React Bootstrap</li>
                                <li>React Markdown</li>
                            </ul>

                            <p>Project in GitHub:{" "}
                                <b>
                                    <a href="https://github.com/daniela0321/flare-docs" target="_blank" rel="noopener">flare-docs</a>
                                </b>
                            </p>

                            <h3 id="knowledge-base-responsibilities">1.4 Main Responsibilities</h3>

                            <p>Daniela:</p>
                            <ul>
                                <li>UX and UI design</li>
                                <li>Frontend development</li>
                                <li>Insight content creation</li>
                            </ul>

                            <p>Igor:</p>
                            <ul>
                                <li>Architectural design</li>
                                <li>Backend development</li>
                                <li>Deployment management</li>
                            </ul>

                            <h2 id="electron-plugin">2. Electron Plugin</h2>
                            <h3 id="electron-plugin-challenge">2.1 The Challenge</h3>
                            <h3 id="electron-plugin-architecture">2.2 Architecture</h3>
                            <h3 id="electron-plugin-technologies">2.3 Used Technologies</h3>
                            <h3 id="electron-plugin-responsibilities">2.4 Main Responsibilities</h3>

                            <h2 id="open-data-service">3. Open Data Service - Coming</h2>
                            <h3 id="open-data-service-challenge">3.1 The Challenge</h3>
                            <h3 id="open-data-service-architecture">3.2 Architecture</h3>
                            <h3 id="open-data-service-technologies">3.3 Used Technologies</h3>
                            <h3 id="open-data-service-responsibilities">3.4 Main Responsibilities</h3>

                        </div>
                    </PageContent>

                </Row>
            </Container>
        </>
    )
}
