// import styles from '../styles/About.module.css'
import { Fragment } from "react"
import { Container, Row, Col } from "react-bootstrap"
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
            <Container className="mb-5">
                {/* Make sure cards are the same height, and check responsiveness */}
                <Row>
                    <Col lg={6}>
                        <AboutCard
                            image="./images/about/Daniela.jpg"
                            title="Daniela Vinaccia"
                            email="daniela@flarehub.io"
                            mobile="+358 (0)400 416187"
                            text="Daniela has working experience in both business and IT project management, business development, and process development. In addition, she has experience on requirements analysis, functional design, and prototyping in software projects. In her free time Daniela enjoys outdoor activities and reading. ADD PROGRAMMING"
                            button="GitHub & Portfolio"
                        />
                    </Col>
                    <Col lg={6}>
                        <AboutCard
                            image="./images/about/Igor.jpg"
                            title="Igor Honhoff"
                            email="igor@flarehub.io"
                            mobile="+358 (0)45 8730130"
                            text="With experience in IT delivery, Igor’s responsibilities have ranged from solutioning and delivery of system implementations to business analysis and process design of multi-national programmes. Most of this work has focused on solutions in the utilities sector and enterprise asset management. In his spare time Igor likes to sail the Finnish archipelago and enjoys cooking. ADD PROGRAMMING"
                            button="GitHub & LinkedIn"
                        />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default About