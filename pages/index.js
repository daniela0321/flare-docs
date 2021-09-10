// Styles:
import styles from '../styles/Home.module.css'
// External packages:
import { Container, Button, Row } from "react-bootstrap"
import Link from "next/link"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import InfoCard from "../components/home/InfoCard"
import InsightCardHome from "../components/home/InsightCardHome"
import Image from '../components/layout/common/Image'


// Home Page:
export default function Home() {
  return (
    <>
      <HeadMeta
        title="Home"
        description="Flare Hub provides you with an interconnected library of Insights - a top-down view 
        to the common frameworks and theories used when building digital solutions."
        canonical="true"
      // algoliaIndexing=
      // type=
      // image={{
      // url: 
      // alt:
      // }}
      />

      <main>

        <Container fluid className="m-0 p-0">
          <div className={styles.intro}>
            <Image
              src="/images/home/intro-image.jpg"
              alt="Flare intro image"
              className={styles.introImage}
              srcSizes={[534, 1067, 1920, 4000]}
              lazy="false"
            />
            <div className={styles.introText}>

              <h1>Build Value-Adding Digital Solutions</h1>
              <p>Gain the Insights and understand relationships between the concepts.</p>

              <Link href="/insights/how-to-build-value-adding-digital-solutions">
                <a role="button" className="btn btn-light">
                  Read more
                </a>
              </Link>

            </div>

          </div>
        </Container>

        <Container className="py-5 px-3">
          <Row className="d-flex flex-row justify-content-center">
            <InfoCard
              image="/images/home/im-desperate.jpg"
              imageTitle="I'm desperate"
              title="Why?"
              description="If you need an introduction, or a refresher, on the specifics of creating 
              value-adding digital products"
            />
            <InfoCard
              image="/images/home/pile-of-books.jpg"
              imageTitle="Pile of books"
              title="What?"
              description="An interconnected library of Insights that offer a top-down view to the 
              common frameworks and models"
            />
            <InfoCard
              image="/images/home/teaching.jpg"
              imageTitle="Teaching"
              title="To Whom?"
              description="E.g. for project managers, product managers, product owners, general managers, 
              students and entrepreneurs"
            />
          </Row>
        </Container>

        <Container fluid className="m-0 p-0">
          <InsightCardHome
            image="/images/home/systems-development-life-cycle-home.jpg"
            imageTitle="Systems Development Life Cycle"
            title="What is the process for creating value-adding digital solutions?"
            button="/insights/product-lifecycles"
            amountAndTime="15 Insights (1 hour 58 minutes)"
            textFirst={false}
          />
          <InsightCardHome
            image="/images/home/governing-practices-home.jpg"
            imageTitle="Governing Practices"
            title="How to provide support and governance for the product life cycle?"
            button="/insights/governing-practices"
            amountAndTime="11 Insights (1 hour 41 minutes)"
            textFirst={true}
          />
        </Container>

        <Container className="py-5 px-3 d-flex flex-column justify-content-center align-items-center">

          <h2 className={styles.viewInsightsTitle}>Complete list of Insights</h2>

          <Link href="/insights">
            <a role="button" className={`${styles.viewInsightsButton} btn btn-primary`}>
              View the list
            </a>
          </Link>

        </Container>

      </main>
    </>
  )
}


