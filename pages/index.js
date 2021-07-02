// import Image from "next/image"
import styles from '../styles/Home.module.css'
import { Fragment } from "react"
import { Container, Button, Row } from "react-bootstrap"
import HeadMeta from "../components/layout/HeadMeta"
import InfoCard from "../components/ui/InfoCard"

// Home Page
function Home() {
  return (
    <Fragment>
      <HeadMeta
        title="Flare Hub"
        description="Flare Hub provides you with an interconnected library of Insights - a top-down view to the common frameworks and theories used when building digital solutions."
      />
      <Container fluid className="m-0 p-0">
        <div className={styles.intro}>
          <img
            src="./images/intro-image.jpg"
            alt="Flare intro image"
            className={styles.introImage}
          />
          <div className={styles.introText}>
            <h1>Build Value-Adding Digital Solutions</h1>
            <p>Gain the Insights and understand relationships between the concepts.</p>
            <Button variant="light">Read more</Button>
          </div>
        </div>
      </Container>
      <Container className="py-5 px-3">
        <Row className="d-flex flex-row justify-content-center">
          <InfoCard
            image="./images/home/im-desperate.jpg"
            imageTitle="I'm desperate"
            title="Why?"
            description="If you need an introduction, or a refresher, on the specifics of creating value-adding digital products"
          />
          <InfoCard
            image="./images/home/pile-of-books.jpg"
            imageTitle="Pile of books"
            title="What?"
            description="An interconnected library of Insights that offer a top-down view to the common frameworks and models"
          />
          <InfoCard
            image="./images/home/teaching.jpg"
            imageTitle="Teaching"
            title="To Whom?"
            description="E.g. for project managers, product managers, product owners, general managers, students and entrepreneurs"
          />
        </Row>
      </Container>
    </Fragment>
  )
}

export default Home
