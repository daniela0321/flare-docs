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
                            <TocH3Page path="#knowledge-base-solution">
                                1.2 The Solution
                            </TocH3Page>
                            <TocH3Page path="#knowledge-base-technologies">
                                1.3 Used Technologies
                            </TocH3Page>
                            <TocH3Page path="#knowledge-base-responsibilities">
                                1.4 Main Responsibilities
                            </TocH3Page>

                            <TocH2Page path="#electron-plugin">
                                2. Electron Plugin Framework
                            </TocH2Page>

                            <TocH3Page path="#electron-framework-challenge">
                                2.1 The Challenge
                            </TocH3Page>
                            <TocH3Page path="#electron-framework-solution">
                                2.2 The Solution
                            </TocH3Page>
                            <TocH3Page path="#electron-framework-technologies">
                                2.3 Used Technologies
                            </TocH3Page>
                            <TocH3Page path="#electron-framework-responsibilities">
                                2.4 Main Responsibilities
                            </TocH3Page>

                            <TocH2Page path="#open-data-service">
                                3. Open Data Service - Coming
                            </TocH2Page>

                            <TocH3Page path="#open-data-service-challenge">
                                3.1 The Challenge
                            </TocH3Page>
                            <TocH3Page path="#open-data-service-solution">
                                3.2 The Solution
                            </TocH3Page>
                            {/* <TocH3Page path="#open-data-service-technologies">
                                3.3 Used Technologies
                            </TocH3Page> */}
                            {/* <TocH3Page path="#open-data-service-responsibilities">
                                3.4 Main Responsibilities
                            </TocH3Page> */}

                        </TocForPage>
                    </Sidebar>

                    {/* Page content: */}
                    <PageContent>
                        <div>

                            <TocPageTitle
                                title="Samples of Our Work"
                            />

                            <h2 id="knowledge-base">1. Knowledge Base</h2>

                            <p><Link href="/"><a><b>Flarehub.io</b></a></Link> is our company&apos;s website. Here we
                                provide a growing knowledge base on how to build value-adding digital solutions.</p>

                            {/* Images as modal*/}
                            <Image
                                src="/images/portfolio/knowledge-base.jpg"
                                alt="Flarehub.io Knowledge Base"
                                className="mt-3 mw-100"
                                sizes="(min-width: 796px) 700px, 96vw"
                                lazy="true"
                            />

                            <h3 id="knowledge-base-challenge">1.1 The Challenge</h3>

                            <p>The previous flarehub.io site was implemented with WordPress:</p>
                            <ul>
                                <li>Expanding beyond the default WordPress capabilities was complex.</li>
                                <li>The solution included multiple heavy third-party plugins
                                    which required significant effort to maintain (e.g. updates and testing).</li>
                                <li>The deployment process was time-taking and complicated.</li>
                            </ul>

                            <h3 id="knowledge-base-solution">1.2 The Solution</h3>

                            <p>The goal was to replace the WordPress implementation with a solution which
                                would:</p>
                            <ul>
                                <li>Enhance the user experience (e.g. adding custom table of contents).</li>
                                <li>Improve performance on both server and client side.</li>
                                <li>Allow for a simple and easy development flow (continuous delivery).</li>
                                <li>Remove any limitations on the abilitites to customize the service.</li>
                                <li>Be easy to / automatically scale with the service demand.</li>
                            </ul>

                            <p>In this process we should not loose the advantages that WordPress offers,
                                like SEO and easy content editing.</p>

                            <h6 className="h6Margin">Information Architecture</h6>

                            <p>Sitemap (ADD ADMIN AREA) xxxxxxxxxxxxxx:</p>

                            {/* Images as modal, new image*/}
                            <Image
                                src="/images/portfolio/knowledge-base-sitemap.jpg"
                                alt="Flarehub.io sitemap"
                                className="mt-3 mb-5 mw-100"
                                sizes="(min-width: 796px) 700px, 96vw"
                                lazy="true"
                            />

                            <h6 className="h6Margin">Application Architecture</h6>

                            <p><b><i>Describe the process for each project: use this space as a way to
                                communicate your thinking and explain certain design or technical choices you made.</i></b></p>

                            <p>The application architecture of the knowledge base xxxxxxxxxxxxxx:</p>

                            {/* Images as modal, new image*/}
                            <Image
                                src="/images/portfolio/knowledge-base-architecture.jpg"
                                alt="Flarehub.io architecture"
                                className="mt-3 mw-100"
                                sizes="(min-width: 796px) 700px, 96vw"
                                lazy="true"
                            />

                            <h3 id="knowledge-base-technologies">1.3 Used Technologies</h3>

                            <p>ADD LINKS!</p>

                            <ul>
                                <li>Frontend development: React</li>
                                <li>Static site generation: Next.js</li>
                                <li>Content delivery: Netlify with automatic deployments from GitHub</li>
                                <li>Content management: Netlify CMS</li>
                            </ul>

                            <h6 className="h6Margin">GitHub repository:{" "}
                                <a href="https://github.com/daniela0321/flare-docs" target="_blank" rel="noopener">flare-docs</a></h6>

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
                                <li>Delivery management (Jamstack)</li>
                            </ul>

                            <h2 id="electron-framework">2. Electron Plugin Framework</h2>

                            <h3 id="electron-framework-challenge">2.1 The Challenge</h3>

                            <h6 className="h6Margin">Incorporating Plugins into an Electron Application</h6>

                            <p>
                                While JavaScript has been increasing in popularity, this has created a
                                challenge with products which should provide an offline solution for desktops
                                as well.
                            </p>

                            <p>
                                So far, the entire user interface for these products needed to be rebuilt in a
                                desktop native language. In addition, JavaScript provides an extremely rich
                                ecosystem of packages, which cannot be utilized with the desktop solution.
                            </p>

                            <p>
                                This is where Electron comes in. Electron is a framework for creating native
                                applications with web technologies like JavaScript, HTML, and CSS.
                            </p>

                            <p>
                                However, as with any solution, there are some limitations to consider.
                                For instance, extending a browser application on the client side is prohibitively
                                complex and rarely done. With desktop applications this is much more straightforward,
                                and therefore they often allow you to install plugins.
                            </p>

                            <p>
                                Since Electron utilises the desktop architecture, it should be very achievable
                                to incorporate plugins into an Electron application. However, there is no
                                standard to achieve this in JavaScript and it is difficult to set this up properly.
                            </p>

                            <h3 id="electron-framework-solution">2.2 The Solution</h3>

                            <h6 className="h6Margin">A Framework for Adding Plugins to Electron</h6>

                            <p>
                                Pluggable Electron has been designed to tackle this challenge. It is a framework
                                for standardising and simplifying the process of adding plugins to Electron. It
                                is the glue between an Electron application and its plugins.
                            </p>

                            <p>
                                This allows developers to write independent extensions - in the form of NPM
                                packages - that can be utilised in the desktop application.
                            </p>

                            <h6 className="h6Margin">Application Architecture</h6>

                            <p><i>The image below describes the high-Level application architecture:</i></p>

                            {/* Images as modal*/}
                            <Image
                                src="/images/portfolio/pluggable-electron.jpg"
                                alt="Pluggable Electron"
                                className="mt-3 mb-5 mw-100"
                                sizes="(min-width: 796px) 700px, 96vw"
                                lazy="true"
                            />

                            <p>
                                The framework includes the tools necessary to manage the whole life cycle of
                                plugins, for example writing, installing, uninstalling and updating plugins,
                                and creating and triggering extension points.
                            </p>

                            <p>
                                To port the client/server model that JavaScript is built for to desktop
                                applications, Electron consists of two layers: a backend layer that has full
                                access to your computer and a frontend layer that handles the user interface
                                and is limited to the Electron window.
                            </p>

                            <p>
                                The lifecycle of a plugin is managed by the Pluggable Electron on the backend
                                side to be able to store the plugin once it is installed.
                            </p>

                            <p>
                                For security reasons the extensions included in the plugins are, however, executed on the frontend, where they are sandboxed to the Electron window.
                            </p>

                            <h3 id="electron-framework-technologies">2.3 Used Technologies</h3>

                            <p>
                                The entire framework is written in plain JavaScript. For the plugin
                                lifecycle, CommonJS is used to best work with Node. For the executions,
                                ES6 is used to best work with Chromium.
                            </p>

                            <p><i>
                                Pluggable Electron uses [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control) and [dependency inversion](https://en.wikipedia.org/wiki/Dependency_inversion_principle) principles as a best practice for an extendable architecture.
                            </i></p>

                            <p><i>
                                GitHub repository:
                            </i></p>

                            <h3 id="electron-framework-responsibilities">2.4 Main Responsibilities</h3>

                            <p>
                                Pluggable Electron has been a side project of Igor.
                            </p>

                            <h2 id="open-data-service">3. Open Data Service - Coming</h2>

                            <h3 id="open-data-service-challenge">3.1 The Challenge</h3>

                            <p>More and more useful information is provided as open data. However,
                                the challenge often is that it requires technical knowledge and capabilities
                                to make use of it. </p>

                            <h3 id="open-data-service-solution">3.2 The Solution</h3>

                            <p>Having a standardized interface which allows non-technical people to
                                access, group and present open data - the service would allow for example
                                building pilots and minimum viable products quickly, without the need to build
                                your own solution.</p>

                            <p><b>More information coming soon.</b></p>

                            {/* <h3 id="open-data-service-technologies">3.3 Used Technologies</h3> */}
                            {/* <h3 id="open-data-service-responsibilities">3.4 Main Responsibilities</h3> */}

                        </div>
                    </PageContent>

                </Row>
            </Container>
        </>
    )
}
