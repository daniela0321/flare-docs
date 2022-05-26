// Internal components:
import Header from "./default/Header"
import Footer from "./default/Footer"
import Piwik from "../head/Piwik"
import GoogleAnalytics from "../head/GoogleAnalytics"

export default function Default({ children }) {
  return (
    <>
      <Piwik />
      <GoogleAnalytics />
      <Header />
      {children}
      <Footer />
    </>
  )
}
