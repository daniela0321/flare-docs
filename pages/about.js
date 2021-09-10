// Styles:
import styles from '../styles/About.module.css'
// External packages:
import { Container, Row, CardDeck } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import PageTitle from "../components/layout/common/PageTitle"
import AboutCard from "../components/about/AboutCard"


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
                <PageTitle
                    title="About Us"
                />

                <Container>
                    <Row className="d-flex flex-row justify-content-center">
                        <p className={styles.paragraph}>We enjoy designing and building solutions that smoothen
                            user experience and processes, and offer informative and useful content.</p>
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
                            <p>
                                Daniela has more than 10 years of experience in IT projects. This has included roles
                                diverging from analyst to project manager. In this time, she has performed tasks like
                                concept design, requirements management, process design, functional design, and project
                                management.
                            </p>
                            <p>
                                At Flare Hub, Daniela has lately been working with both the concept design and
                                technical part of system implementation. The technical part has been mainly front-end
                                development, using JavaScript framework React. She also enjoys technical writing -
                                simplifying and visualizing technical information and concepts.
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
                            <p>
                                Igor has over 15 years of experience in IT delivery. In this time, he has had
                                roles diverging from IT support to technical consultant, process owner and technical
                                representative. As part of this journey, he has performed tasks like requirements
                                management, process design, solution design and integration architecture. Most of
                                these tasks continued into the system implementation, maintaining ownership of the
                                solution up to delivery.
                            </p>
                            <p>
                                At Flare Hub, Igor has lately been working with the technical part of system
                                implementation, including architecture and full stack development, using JavaScript
                                frameworks like React, Node.js and Electron.
                            </p>

                        </AboutCard>
                    </CardDeck>
                </Container>
            </main>
        </>
    )
}
