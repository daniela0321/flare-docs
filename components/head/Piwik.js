import { useState, useEffect } from "react"
// Internal components
import CookieBanner from "../layout/common/CookieBanner"
import tagManager from "../../utils/tag-manager"

// Include Piwik TagManager script if user is not an admin
export default function Piwik() {
  // Toggle to include the script
  const [complianceStatus, setComplianceStatus] = useState(-2)

  // Check if user is an admin only in the browser   
  useEffect(() => {
    if (localStorage.getItem('is_admin') !== '1') {
      tagManager()
      window.ppms.cm.api('getComplianceSettings', settings => {
        if (!settings.consents.analytics) {
          window.ppms.cm.api('setInitialComplianceSettings',
            { consents: ['analytics'] },
            () => setComplianceStatus(-1)
          )
        } else {
          setComplianceStatus(settings.consents.analytics.status)
        }
      })
    }
  }, [])

  return complianceStatus === -1 ? <CookieBanner answer={setComplianceStatus} /> : <></>
}

