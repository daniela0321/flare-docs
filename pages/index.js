import Head from "next/head"
// import Image from "next/image"
import { Fragment } from "react"
import styles from '../styles/Home.module.css'
import { Container, Button, Row, Col } from "react-bootstrap"

// Home Page
function Home() {
  return (
    <Fragment>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Flare Docs</title>
        <meta name="description" content="Flare Docs provides a home for your knowledge base" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid className="m-0 p-0">
        <div className={styles.intro}>
          <img
            src="./images/intro-image.jpg"
            alt="Flare intro image"
            className={styles.introImage}
          />
          <div className={styles.introText}>
            <h2>Build Value-Adding Digital Solutions</h2>
            <p>Gain the Insights and understand relationships between the concepts.</p>
            <Button variant="light">Read more</Button>
          </div>
        </div>
      </Container>
      <Container className="py-5 px-3">
        <Row className="d-flex flex-row justify-content-center">
          <Col md={12} lg={4} className="p-3 d-flex flex-column align-items-center">
            <img
              src="./images/home/im-desperate.jpg"
              alt="I'm desperate"
              className={styles.roundImage}
            />
            <h2>Why?</h2>
            <p className={styles.paragraphWidth}>
              If you need an introduction, or a refresher, on the specifics of creating value-adding digital products
            </p>
          </Col>
          <Col md={12} lg={4} className="p-3 d-flex flex-column align-items-center">
            <img
              src="./images/home/pile-of-books.jpg"
              alt="Pile of books"
              className={styles.roundImage}
            />
            <h2>What?</h2>
            <p className={styles.paragraphWidth}>
              An interconnected library of Insights that offer a top-down view to the common frameworks and models
            </p>
          </Col>
          <Col md={12} lg={4} className="p-3 d-flex flex-column align-items-center">
            <img
              src="./images/home/teaching.jpg"
              alt="Teaching"
              className={styles.roundImage}
            />
            <h2>To Whom?</h2>
            <p className={styles.paragraphWidth}>
              E.g. for project managers, product managers, product owners, general managers, students and entrepreneurs
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Home
