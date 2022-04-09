// External packages
import { FormCheck, FormGroup } from "react-bootstrap"
import { useEffect, useState } from "react"

export default function ConsentSettings() {
  const [consent, setConsent] = useState(-1)
  const [consentMsg, setConsentMsg] = useState('not let us know if you consent')

  function switchConsentMsg() {
    if (window.ppms) {
      window.ppms.cm.api('getComplianceSettings', settings => {
        if (settings.consents.analytics) {
          setConsent(settings.consents.analytics.status)
          switch (settings.consents.analytics.status) {
            case 0:
              setConsentMsg('requested that we do not collect any data on you')
              break;
            case 1:
              setConsentMsg('provided us with consent to collect analytics data')
              break;
          }
        }
      })
    }
  }

  useEffect(switchConsentMsg, [])

  function handleChangeConsent(e) {
    window.ppms.cm.api(
      'setComplianceSettings',
      { consents: { analytics: { status: +e.target.value } } },
      switchConsentMsg
    )
  }

  return (
    <div>
      <p>
        Here you can manage your data privacy and consent settings for this website.
        We request certain data to continually improve your experience on our website.
        We will only collect and use data for analytics and if you have consented to it.
        You have currently: <b>{consentMsg}</b>.
      </p>
      <FormGroup>
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
