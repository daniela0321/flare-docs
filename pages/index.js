import Head from "next/head"
// import Image from "next/image"
import { Fragment } from "react"
import styles from '../styles/Home.module.css'
import { Container, Button } from "react-bootstrap"

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
      <Container className={styles.container} fluid>
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
    </Fragment>
  )
}

export default Home
