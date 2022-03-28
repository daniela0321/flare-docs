// Styles:
import '../styles/bootstrap.theme.scss'
import '../styles/globals.css'
// Internal components:
import Default from "../components/layout/Default"

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Default

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

