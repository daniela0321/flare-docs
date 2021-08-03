import styles from '../styles/About.module.css'
import { Fragment } from "react"
import { Container, Row, Col, CardDeck, Button } from "react-bootstrap"
import HeadMeta from "../components/layout/HeadMeta"
import PageTitle from "../components/layout/PageTitle"
import AboutCard from "../components/about/AboutCard"

function About() {

    return (
        <Fragment>

            <HeadMeta
                title="About Us"
                description="A little bit about us"
            />

            <PageTitle
                title="About Us"
            />

            <Container>
                <Row className="d-flex flex-row justify-content-center">
                    <p className={styles.paragraph}>We enjoy designing and building solutions that smoothen user experience and processes, and offer informative and useful content.</p>
                </Row>
                {/* <Row className="mb-5 d-flex flex-row justify-content-center">
                    <Button className="mb-3">See Our Portfolio</Button>
                </Row> */}
            </Container>

            <Container fluid className={styles.container2}>
                <CardDeck className="mx-0 mb-5">

                    <AboutCard
                        image="./images/about/Daniela.jpg"
                        title="Daniela Vinaccia"
                        email="daniela@flarehub.io"
                        mobile="+358 (0)400 416187"
                        text1="Daniela has working experience in project management and business process development. In addition, she has experience in software development, requirements analysis, and functional design. She also enjoys technical writing - simplifying and visualizing technical information and concepts."
                    // text2=""
                    // buttonname1="Portfolio"
                    // buttonname2="GitHub"
                    />

                    <AboutCard
                        image="./images/about/Igor.jpg"
                        title="Igor Honhoff"
                        email="igor@flarehub.io"
                        mobile="+358 (0)45 8730130"
                        text1="With experience in IT delivery, Igor’s responsibilities have ranged from solutioning and delivery of system implementations to business analysis and process design of multi-national programmes. Most of this work has focused on solutions in the utilities sector and enterprise asset management. ADD PROGRAMMING!"
                    // text2="In his spare time Igor likes to sail the Finnish archipelago and enjoys cooking."
                    // buttonname1="LinkedIn"
                    // buttonname2="GitHub"
                    />

                </CardDeck>
            </Container>
        </Fragment>
    )
}

export default About