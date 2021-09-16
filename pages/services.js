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
                                1. Requirements Analysis
                            </TocH2Page>

                            <TocH3Page path="#">
                                1.1 Focus Areas
                            </TocH3Page>
                            <TocH3Page path="#">
                                1.2 Experience
                            </TocH3Page>

                            <TocH2Page path="#design">
                                2. Design
                            </TocH2Page>

                            <TocH3Page path="#">
                                2.1 Focus Areas
                            </TocH3Page>
                            <TocH3Page path="#">
                                2.2 Experience
                            </TocH3Page>
                            <TocH3Page path="#">
                                2.3 Tools
                            </TocH3Page>

                            <TocH2Page path="#development">
                                3. Software Development
                            </TocH2Page>

                            <TocH3Page path="#">
                                3.1 Focus Areas
                            </TocH3Page>
                            <TocH3Page path="#">
                                3.2 Experience
                            </TocH3Page>
                            <TocH3Page path="#">
                                3.3 Tools and Technologies
                            </TocH3Page>

                            <TocH2Page path="#technical-writing">
                                4. Technical Writing
                            </TocH2Page>

                            <TocH3Page path="#">
                                4.1 Focus Areas
                            </TocH3Page>
                            <TocH3Page path="#">
                                4.2 Experience
                            </TocH3Page>

                        </TocForPage>
                    </Sidebar>

                    {/* Page content: */}
                    <PageContent>
                        <div>

                            <TocPageTitle
                                title="Our Services"
                            />

                            <p><b><i>TEMP: Add below your unique selling points and validators
                                (past work and/or skills, links to portfolio and past projects).</i></b></p>

                            <p>We focus on four main categories: pre-studies and requirements analysis, functional
                                and architectural design, software development, and technical writing.</p>

                            <p>Our main working language is English.</p>

                            <h2 id="requirements">1. Requirements Analysis</h2>

                            <h3>1.1 Focus Areas</h3>

                            <h6 className="h6Margin">Pre-studies, e.g.</h6>
                            <ul>
                                <li>Analysing the current situation</li>
                                <li>Seeking, describing, and evaluating alternative solutions</li>
                            </ul>

                            <h6 className="h6Margin">Requirements Development, e.g.</h6>
                            <ul>
                                <li>Business requirements</li>
                                <li>Functional (solution) requirements</li>
                                <li>Content requirements</li>
                                <li>System requirements</li>
                            </ul>

                            Read more about how we structure the {""}
                            <Link href="/insights/requirements"><a>requirements development</a></Link> {""}
                            domain.

                            <h3>1.2 Experience</h3>

                            <h6 className="h6Margin">Igor</h6>
                            <ul>
                                <li>
                                </li>
                                <li></li>
                            </ul>

                            <h6 className="h6Margin">Daniela</h6>
                            <ul>
                                <li>
                                    Daniela has worked at Accenture as an Analyst in a SAP project, where her
                                    main responsibilities were focused around SAP MM (Materials Management) functional
                                    design tasks like business requirements development, fit-gap analysis, and
                                    facilitating client workshops.
                                </li>
                                <li>
                                    In addition, when she has worked at Kesko Corporation as a Project Manager, and did several
                                    pre-studies for management on a unit level, for example a fit-gap analysis
                                    on customer data and its utilization.
                                </li>
                            </ul>

                            <h2 id="design">2. Design</h2>

                            <h3>2.1 Focus Areas</h3>

                            <ul>
                                <li><b>Functional Design</b>.
                                    What the application should be able to do, in very clear terms
                                    with the users in mind.
                                </li>

                                <li><b>Architectural Design</b>.
                                    Data, application, and information architecture.
                                </li>

                                <li><b>Prototyping</b>.
                                    In some cases prototyping might be useful, see the software
                                    development section below.
                                </li>
                            </ul>

                            Read more about how we structure the {""}
                            <Link href="/insights/service-ux-and-ui-design"><a>Design</a></Link> and {""}
                            <Link href="/insights/enterprise-architecture"><a>Architecture</a></Link> {""}
                            domains.

                            <h3>2.2 Experience</h3>

                            <h6 className="h6Margin">Igor</h6>
                            <ul>
                                <li>
                                </li>
                                <li></li>
                            </ul>

                            <h6 className="h6Margin">Daniela</h6>
                            <ul>
                                <li>
                                    In the SAP project mentioned above, Daniela was responsible of the SAP MM
                                    functional specifications including business process design and SAP configuration design.
                                </li>
                                <li>
                                    In addition, at Kesko Corporation she worked as a business Project Manager
                                    in a corporate level Customer MDM project, where her responsibilities
                                    included managing the functional design and product backlog in the project.
                                </li>
                            </ul>

                            <h3>2.3 Tools</h3>

                            <p>In this domain, we have used for example the following tools:</p>
                            <ul>
                                <li>Visio</li>
                                <li>diagrams.net</li>
                                <li>Figma</li>
                            </ul>

                            <h2 id="development">3. Software Development</h2>

                            <h3>3.1 Focus Areas</h3>

                            <p>
                                Besides our corporation experience, we are self-taught developers. We
                                enjoy designing and building solutions that smoothen user experience and
                                processes, and offer informative and useful content. For example,
                            </p>

                            <ul>
                                <li>Knowledge bases....</li>
                            </ul>

                            <h3>3.2 Experience</h3>

                            <p>
                                See {" "}
                                <Link href="/portfolio"><a><b>samples</b></a></Link> {" "}
                                of our work, including the main responsibilities.
                            </p>

                            <h3>3.3 Tools and Technologies</h3>

                            <p>Currently...</p>

                            <h6 className="h6Margin">Frontend</h6>
                            <ul>
                                <li>Html</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React, Next.js</li>
                                <li>Bootstrap</li>
                            </ul>

                            <h6 className="h6Margin">Backend</h6>
                            <ul>
                                <li>Node.js</li>
                            </ul>

                            <h6 className="h6Margin">General</h6>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Netlify</li>
                                <li>VsCode</li>
                                <li>APIs</li>
                            </ul>

                            <h2 id="technical-writing">4. Technical Writing</h2>

                            <h3>4.1 Focus Areas</h3>

                            <h3>4.2 Experience</h3>

                        </div>
                    </PageContent>

                </Row>
            </Container>
        </>
    )
}
