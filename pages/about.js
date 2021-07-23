import styles from '../styles/About.module.css'
import { Fragment } from "react"
import { Container, Row, Col, CardDeck } from "react-bootstrap"
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
                    <p className={styles.paragraph}>We enjoy combining web development with process development and content development - in other words, designing and building solutions that smoothen processes and user experience, and offer informative and useful content.</p>
                </Row>
            </Container>

            <Container fluid className={styles.container2}>
                <CardDeck className="mx-0 mb-5">

                    <AboutCard
                        image="./images/about/Daniela.jpg"
                        title="Daniela Vinaccia"
                        email="daniela@flarehub.io"
                        mobile="+358 (0)400 416187"
                        text1="Daniela has working experience in both business and IT project management, business development, and process development. In addition, she has experience on requirements analysis, functional design, and prototyping in software projects. ADD PROGRAMMING!"
                        text2="In her free time Daniela enjoys outdoor activities and reading."
                        buttonname1="Portfolio"
                        buttonname2="GitHub"
                    />

                    <AboutCard
                        image="./images/about/Igor.jpg"
                        title="Igor Honhoff"
                        email="igor@flarehub.io"
                        mobile="+358 (0)45 8730130"
                        text1="With experience in IT delivery, Igor’s responsibilities have ranged from solutioning and delivery of system implementations to business analysis and process design of multi-national programmes. Most of this work has focused on solutions in the utilities sector and enterprise asset management. ADD PROGRAMMING!"
                        text2="In his spare time Igor likes to sail the Finnish archipelago and enjoys cooking."
                        buttonname1="LinkedIn"
                        buttonname2="GitHub"
                    />

                </CardDeck>
            </Container>
        </Fragment>
    )
}

export default About