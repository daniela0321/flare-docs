// Styles:
import '../styles/bootstrap.theme.scss'
import '../styles/globals.css'
// Internal components:
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import CookieBanner from "../components/layout/CookieBanner"
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

