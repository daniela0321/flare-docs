// External packages
import { FormCheck, FormGroup } from "react-bootstrap"
import { useEffect, useState } from "react"

export default function ConsentSettings() {
  const [consent, setConsent] = useState(-2)

  function getConsentStatus() {
    if (window.ppms) {
      window.ppms.cm.api('getComplianceSettings', settings => {
        settings.consents.analytics && setConsent(settings.consents.analytics.status)
      })
    }
  }

  useEffect(getConsentStatus, [])

  function handleChangeConsent(e) {
    window.ppms.cm.api(
      'setComplianceSettings',
      { consents: { analytics: { status: +e.target.value } } },
      getConsentStatus
    )
  }

  return (
    <div>
      <p>
        Here you can manage your data privacy and consent settings for this website.
        We request certain data to continually improve your experience on our website.
        We will only collect and use data for analytics, and only if you have consented to it.
      </p>
      <FormGroup>
        {consent === -1 &&
          <strong>No information has been provided on your consent preferences</strong>
        }
        <FormCheck
          type="radio"
          name="consentType"
          label="I request that you do not collect analytics data on me"
          value={0}
          checked={consent === 0}
          onChange={handleChangeConsent}
        />
        <FormCheck
          type="radio"
          name="consentType"
          label="I consent to the collection of analytics data on me"
          value={1}
          checked={consent === 1}
          onChange={handleChangeConsent}
        />
      </FormGroup>

    </div>
  )
}
