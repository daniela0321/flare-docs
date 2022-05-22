// Styles:
import styles from "./CookieBanner.module.css"
// External packages:
import Link from "next/link"
import { useState, useEffect } from "react"

// Cookie banner:
export default function CookieBanner() {
  // Get consent status on browser side
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.ppms.cm.api('getComplianceSettings', settings => {
      if (!settings.consents.analytics || settings.consents.analytics.status === -1) {
        window.ppms.cm.api(
          'setInitialComplianceSettings',
          { consents: ['analytics'] },
          () => setShow(true)
        )
      }
    })
  }, [])

  // Update consent status and redirect if necessary
  function handleConsent(agree) {
    window.ppms.cm.api(
      'setComplianceSettings',
      { consents: { analytics: { status: agree } } },
      () => setShow(false)
    )
  }

  // Only return cookie banner if no consent has been set
  if (show) return (
    <div className={`${styles.banner} fixed-bottom container-fluid p-3 pb-4 bg-secondary text-light`}>
      <div className="">
        <h4 className="mb-3">Privacy settings</h4>
        <p>May we collect basic data about how you
          use our site to improve the user experience for all visitors?
          The data will only be used for analytical purposes.
        </p>
      </div>
      <div className="d-sm-flex justify-content-between">
        <p className="mb-4 mb-sm-0">
          <Link href="/cookie-policy" >
            <a className={styles.link} onClick={() => setShow(false)}>
              See Cookie policy for details
            </a>
          </Link>
        </p>

        <div className="ml-sm-2">
          <div className="d-flex">
            <button
              type="button"
              className={`${styles.button} btn btn-light mr-2`}
              onClick={() => handleConsent(1)}>
              Agree
            </button>

            <button
              type="button"
              className={`${styles.button} btn btn-outline-light`}
              onClick={() => handleConsent(0)}
            >
              Disagree
            </button>
          </div>
        </div>
      </div>

    </div>
  )

  return <></>
}