import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flare Docs</title>
        <meta name="description" content="Flare Docs provides a home for your knowledge base" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Flare Docs
        </h1>
      </main>
    </div >
  )
}
