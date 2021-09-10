// Styles:
import '../styles/bootstrap.theme.scss'
import '../styles/globals.css'
// External packages
// import identity from 'netlify-identity-widget'
// import { useEffect } from 'react'
// Internal components:
import CookieBanner from "../components/layout/common/CookieBanner"
import Default from "../components/layout/Default"


export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Default

  // useEffect(() => {
  //   identity.init()
  // }, [])

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieBanner />
    </>
  )
}

