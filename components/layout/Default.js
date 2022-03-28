import { useEffect } from "react"
// Internal components:
import Header from "./default/Header"
import Footer from "./default/Footer"
import TagManager from "../head/TagManager"

export default function Default({ children }) {
  return (
    <>
      <TagManager />
      <Header />
      {children}
      <Footer />
    </>
  )
}
