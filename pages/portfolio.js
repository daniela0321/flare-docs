// External packages:
import React from "react"
import Link from 'next/link'
import { Container, Row, Col } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import Sidebar from '../components/layout/common/toc/Sidebar'
import TocForPage from '../components/layout/common/toc/TocForPage'
import TocH2Page from "../components/layout/common/toc/TocH2Page"
import TocH3Page from "../components/layout/common/toc/TocH3Page"
import TocPageTitle from "../components/layout/common/TocPageTitle"
import PageContent from '../components/layout/common/PageContent'
import ImageModal from "../components/layout/common/ImageModal"
import IconAndText from '../components/layout/common/IconAndText'
import GitHubIcon from "../components/layout/common/GitHubIcon"



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

                            <TocH2Page path="#electron-framework">
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

                            {/* <TocH2Page path="#open-data-service">
                                3. Open Data Service - Coming
                            </TocH2Page>

                            <TocH3Page path="#open-data-service-challenge">
                                3.1 The Challenge
                            </TocH3Page>
                            <TocH3Page path="#open-data-service-solution">
                                3.2 The Solution
                            </TocH3Page> */}
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

                            <ImageModal
                                src="/images/portfolio/knowledge-base.jpg"
                                alt="Flarehub.io Knowledge Base"
                                lazy="true"
                                className="d-flex justify-content-center"
                            />

                            <h3 id="knowledge-base-challenge">1.1 The Challenge</h3>

                            <h6 className="h6Margin">The Initial Situation</h6>

                            <p>The previous flarehub.io site was implemented with WordPress. This worked but
                                had some limitations:</p>
                            <ul>
                                <li>Expanding beyond the default WordPress capabilities was complex.</li>
                                <li>The solution included multiple heavy third-party plugins
                                    which required significant effort to maintain (e.g., updates and testing).</li>
                                <li>The deployment process was time-taking and complicated.</li>
                                <li>There was a clear limit to the number of visitors the site could support,
                                    after which actions needed to be taken to improve performance.</li>
                            </ul>

                            <h6 className="h6Margin">The Goal</h6>

                            <p>Any solution that eliminates these limitations should:</p>
                            <ul>
                                <li>Enhance the user experience (e.g., adding custom table of contents).</li>
                                <li>Improve performance on both server and client side.</li>
                                <li>Allow for a simple and easy development flow (continuous delivery).</li>
                                <li>Remove any limitations on the abilities to customize the service.</li>
                                <li>Scale easily or even automatically with the service demand.</li>
                            </ul>

                            <p>
                                On the other hand, we should not lose the advantages of the existing solution,
                                like SEO and easy content editing.
                            </p>

                            <h3 id="knowledge-base-solution">1.2 The Solution</h3>

                            <h6 className="h6Margin">Root Cause Analysis</h6>

                            <p>The root of most of the limitations defined above can be traced back to
                                two core issues with a traditional CMS like WordPress:</p>

                            <ul>
                                <li>It is responsible for both the management and delivery of the
                                    content in one application.</li>
                                <li>It dynamically generates pages on request, requiring server
                                    actions on each page view.</li>
                            </ul>

                            <h6 className="h6Margin">Our Approach</h6>

                            <p>These issues are common for any website built on a traditional CMS and a
                                solution to this, that is becoming popular, is to use a {" "}
                                <a href="https://jamstack.org/what-is-jamstack/" target="_blank" rel="noopener">
                                    Jamstack
                                </a>.
                            </p>

                            <ul>
                                <li>
                                    With Jamstack, the entire frontend is prebuilt into static pages and
                                    assets during the build phase. This results in sites which
                                    can be served directly from a static CDN. Interactivity can then be
                                    introduced on the browser side using JavaScript.
                                </li>
                                <li>
                                    Another concept of Jamstack is to decouple content sources from the
                                    website functionality. One benefit of this is that it simplifies
                                    the deployment process significantly by deploying content and functional
                                    changes separately. This, in turn, makes it easier to apply Continuous Delivery.
                                </li>
                            </ul>

                            <p>As such, we decided to replace WordPress with a Jamstack.</p>

                            <h6 className="h6Margin">Application Architecture</h6>

                            <p>
                                To keep the development, content management and maintenance as simple and
                                flexible as possible, we decided to build our site with Next.js, host it on
                                Netlify and manage the content using Netlify CMS.
                            </p>

                            <p>These elements fit together as follows:</p>

                            <ul>
                                <li>The site functionality and layout are written using the Next.js framework
                                    and stored in GitHub.</li>
                                <li>The content is managed using Netlify CMS and stored in GitHub.</li>
                                <li>When a change in GitHub is flagged as a candidate for production
                                    update (pull request), Netlify creates a preview deployment for verification.</li>
                                <li>When the preview is approved, it is published to production (merge).</li>
                                <li>Netlify serves the production site as static files from its CDN all over the world.</li>
                            </ul>

                            <p>The application architecture diagram:</p>

                            <ImageModal
                                src="/images/portfolio/knowledge-base-architecture.jpg"
                                alt="Flarehub.io architecture"
                                lazy="true"
                                className="d-flex justify-content-center"
                            />

                            <h6 className="h6Margin mt-5">Information Architecture</h6>

                            <p>The site has the sitemap as defined below. Netlify CMS, which we use for the admin area,
                                has a standard site structure, determined by Netlify. As such, we have not described the
                                admin pages further in the sitemap.
                            </p>

                            <ImageModal
                                src="/images/portfolio/knowledge-base-sitemap.jpg"
                                alt="Flarehub.io sitemap"
                                lazy="true"
                                className="d-flex justify-content-center"
                            />

                            <h3 id="knowledge-base-technologies">1.3 Used Technologies</h3>

                            <ul>
                                <li>
                                    Frontend development: {" "}
                                    <a href="https://reactjs.org/" target="_blank" rel="noopener">
                                        React
                                    </a>
                                </li>
                                <li>
                                    Static site generation: {" "}
                                    <a href="https://nextjs.org/" target="_blank" rel="noopener">
                                        Next.js
                                    </a>
                                </li>
                                <li>
                                    Content delivery: {" "}
                                    <a href="https://www.netlify.com/" target="_blank" rel="noopener">
                                        Netlify
                                    </a> with automatic deployments from GitHub
                                </li>
                                <li>
                                    Content management: {" "}
                                    <a href="https://www.netlifycms.org/" target="_blank" rel="noopener">
                                        Netlify CMS
                                    </a>
                                </li>
                            </ul>

                            <IconAndText
                                className="d-flex justify-content-start align-items-center"
                                classNameIcon="gitHubIconBlack"
                                // classNameLink="blackLink"
                                link="https://github.com/daniela0321/flare-docs"
                                linkText="flare-docs"
                            >
                                <GitHubIcon />
                            </IconAndText>

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
                                ecosystem of packages, which cannot be utilized with a desktop solution.
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
                                Pluggable Electron has been designed to tackle the challenge described above. It is a
                                framework for standardising and simplifying the process of adding plugins to Electron.
                                In other words, it is the glue between an Electron application and its plugins.
                            </p>

                            <p>
                                This allows developers to write independent extensions - in the form of NPM
                                packages - that can be utilised in the desktop application.
                            </p>

                            <h6 className="h6Margin">Application Architecture</h6>

                            <p>
                                The framework includes the tools necessary to manage the whole life cycle of
                                plugins, for example writing, installing, uninstalling and updating plugins,
                                and creating and triggering extension points.
                            </p>

                            <p>
                                To port the client/server model, that JavaScript is built for, to desktop
                                applications, Electron consists of two layers: a backend layer that has full
                                access to your computer and a frontend layer that handles the user interface
                                and is limited to the Electron window.
                            </p>

                            <p>
                                The lifecycle of a plugin is managed by Pluggable Electron on the backend
                                side to be able to store the plugin once it is installed.
                            </p>

                            <p>
                                For security reasons the extensions included in the plugins are, however,
                                executed on the frontend, where they are sandboxed to the Electron window.
                            </p>

                            <p>The application architecture diagram:</p>

                            <ImageModal
                                src="/images/portfolio/pluggable-electron.jpg"
                                alt="Pluggable Electron"
                                lazy="true"
                                className="d-flex justify-content-center"
                            />

                            <h3 id="electron-framework-technologies">2.3 Used Technologies</h3>

                            <ul>
                                <li>
                                    The entire framework is written in plain JavaScript
                                </li>
                                <li>
                                    For the plugin lifecycle, CommonJS is used to best work with Node
                                </li>
                                <li>
                                    For the executions, ES6 is used to best work with Chromium
                                </li>
                                <li>
                                    Pluggable Electron uses {" "}
                                    <a href="https://en.wikipedia.org/wiki/Inversion_of_control" target="_blank" rel="noopener">
                                        inversion of control
                                    </a> {" "}
                                    and {" "}
                                    <a href="https://en.wikipedia.org/wiki/Dependency_inversion_principle" target="_blank" rel="noopener">
                                        dependency inversion
                                    </a> {" "}
                                    principles as a best practice for an extendable architecture
                                </li>
                            </ul>

                            <IconAndText
                                className="d-flex justify-content-start align-items-center"
                                classNameIcon="gitHubIconBlack"
                                // classNameLink="blackLink"
                                link="https://github.com/dutchigor/pluggable-electron"
                                linkText="pluggable-electron"
                            >
                                <GitHubIcon />
                            </IconAndText>

                            <h3 id="electron-framework-responsibilities">2.4 Main Responsibilities</h3>

                            <p>
                                Pluggable Electron is an open source project by Igor.
                            </p>

                            {/* <h2 id="open-data-service">3. Open Data Service - Coming</h2>

                            <h3 id="open-data-service-challenge">3.1 The Challenge</h3>

                            <p>More and more useful information is provided as open data. However,
                                the challenge often is that it requires technical knowledge and capabilities
                                to make use of it. </p>

                            <h3 id="open-data-service-solution">3.2 The Solution</h3>

                            <p>Our goal is to provide a standardized service which allows non-technical
                                people to access selected open data sources, and group and present their contents.
                                The service would allow for example building pilots and minimum viable products
                                quickly, without the need to build your own solution.</p>

                            <p><b>More information coming soon.</b></p> */}

                            {/* <h3 id="open-data-service-technologies">3.3 Used Technologies</h3> */}
                            {/* <h3 id="open-data-service-responsibilities">3.4 Main Responsibilities</h3> */}

                        </div>
                    </PageContent>

                </Row>
            </Container>
        </>
    )
}
