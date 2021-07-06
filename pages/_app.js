import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/bootstrap.theme.scss'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
