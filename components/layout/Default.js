// Internal components:
import Header from "./default/Header"
import Footer from "./default/Footer"
import Piwik from "../head/Piwik"

export default function Default({ children }) {
  return (
    <>
      <Piwik />
      <Header />
      {children}
      <Footer />
    </>
  )
}
