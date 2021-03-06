// Styles:
import styles from '../styles/About.module.css'
// External packages:
import Link from "next/link"
import { Container, Row, CardDeck } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import PageTitle from "../components/layout/common/PageTitle"
import AboutCard from "../components/about/AboutCard"
import IconAndText from '../components/layout/common/IconAndText'
import GitHubIcon from '../components/layout/common/GitHubIcon'
import LinkedInIcon from '../components/about/LinkedInIcon'


// About Us page:
export default function About() {
    return (
        <>
            <HeadMeta
                title="About Us"
                description="A little bit about us"
                canonical="true"
            // algoliaIndexing=
            // type=
            // image={{
            // url: 
            // alt:
            // }}
            />

            <main>

                <Container>

                    <PageTitle
                        title="About Us"
                    />

                    <Row className={`${styles.text} mx-auto mb-5 d-flex justify-content-center text-center`}>
                        <p>We enjoy designing and building solutions that smoothen
                            user experience and processes, and offer informative and useful content.</p>

                        <p>See <Link href="/portfolio"><a><b>samples of our work</b></a></Link>.</p>
                    </Row>

                </Container>

                <Container fluid className={styles.container2}>
                    <CardDeck className="mx-0 mb-5">

                        <AboutCard
                            image="/images/about/daniela-pic.jpg"
                            imageAlt="Daniela"
                            lazyImage="false"
                            title="Daniela Vinaccia"
                            email="daniela@flarehub.io"
                            mobile="+358 (0)400 416187"
                        >

                            <IconAndText
                                className="d-flex justify-content-center align-items-center"
                                classNameIcon="gitHubIconBlack"
                                classNameLink="blackLink"
                                link="https://github.com/daniela0321"
                                linkText="daniela0321"
                            >
                                <GitHubIcon />
                            </IconAndText>

                            <p className="mt-4">
                                Daniela has more than 10 years of experience in IT projects. This has included roles diverging from analyst to project manager.
                                In this time, she has performed tasks like concept design, requirements analysis and management, process design, UX design,
                                and project management.
                            </p>
                            <p>
                                In addition, Daniela also has some experience with the implementation itself.  This has mainly involved creating WordPress sites
                                and front-end development, using JavaScript framework React. She also enjoys technical writing - simplifying and visualizing
                                technical information and concepts.
                            </p>
                        </AboutCard>

                        <AboutCard
                            image="/images/about/igor-pic.jpg"
                            imageAlt="Igor"
                            lazyImage="false"
                            title="Igor Honhoff"
                            email="igor@flarehub.io"
                            mobile="+358 (0)45 8730130"
                        >

                            <div className="d-flex justify-content-center">

                                <div>
                                    <IconAndText
                                        className="d-flex justify-content-center align-items-center"
                                        classNameIcon="gitHubIconBlack"
                                        classNameLink="blackLink"
                                        link="https://github.com/dutchigor"
                                        linkText="dutchigor"
                                    >
                                        <GitHubIcon />
                                    </IconAndText>
                                </div>

                                <div className="ml-4">
                                    <IconAndText
                                        className="d-flex justify-content-center align-items-center"
                                        classNameIcon="LinkedInIconBlack"
                                        classNameLink="blackLink"
                                        link="https://fi.linkedin.com/in/igorhonhoff"
                                        linkText="igorhonhoff"
                                    >
                                        <LinkedInIcon />
                                    </IconAndText>
                                </div>

                            </div>

                            <p className="mt-4">
                                Igor has over 15 years of experience in IT delivery. In this time, he has had
                                roles diverging from IT support to technical consultant, process owner and technical
                                representative. As part of this journey, he has performed tasks like requirements
                                management, process design, solution design and integration architecture. Most of
                                these tasks continued into the system implementation, maintaining ownership of the
                                solution up to delivery.
                            </p>
                            <p>
                                At Flare Hub, Igor has been working with the technical part of system implementation,
                                including architecture and full stack development, using JavaScript frameworks like
                                React, Vue, Node.js and Electron.
                            </p>
                        </AboutCard>

                    </CardDeck>
                </Container>
            </main>
        </>
    )
}
