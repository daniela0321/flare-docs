// Styles:
import '../styles/bootstrap.theme.scss'
import '../styles/globals.css'
// Internal components:
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

