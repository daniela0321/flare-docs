import { useState, useEffect } from "react"
// Internal components
import CookieBanner from "../layout/common/CookieBanner"
import tagManager from "../../utils/tag-manager"

// Include Piwik TagManager script if user is not an admin
export default function Piwik() {
  // Toggle to include the script
  const [addTagMgr, setAddTagMgr] = useState(false)

  // Check if user is an admin only in the browser
  useEffect(() => {
    if (localStorage.getItem('is_admin') !== '1') {
      tagManager()
      setAddTagMgr(true)
    }
  }, [])

  if (addTagMgr) return (
    <CookieBanner />
  )

  return <></>
}