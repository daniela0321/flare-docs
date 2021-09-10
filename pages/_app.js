// Styles:
import '../styles/bootstrap.theme.scss'
import '../styles/globals.css'
// Internal components:
import Header from "../components/layout/default/Header"
import Footer from "../components/layout/default/Footer"
import CookieBanner from "../components/layout/common/CookieBanner"
import GoogleAnalytics from '../components/head/GoogleAnalytics'


export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <GoogleAnalytics />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <CookieBanner />
    </>
  )
}

