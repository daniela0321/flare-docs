// Internal components:
import Header from "./default/Header"
import Footer from "./default/Footer"
import GoogleAnalytics from '../head/GoogleAnalytics'

export default function Default({ children }) {
  return (
    <>
      <GoogleAnalytics />
      <Header />
      {children}
      <Footer />
    </>
  )
}
