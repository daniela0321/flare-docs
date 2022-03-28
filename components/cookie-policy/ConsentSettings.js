// External packages
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

export default function ConsentSettings() {
  return (
    <div>
      <p>
        Here you can manage your data privacy and consent settings for this website.
        We request certain data to continually improve your experience on our website.
        We will only collect and use data for specific uses you have consented to.
        See the settings page for more details.
      </p>
      <Button onClick={() => window.ppms.cm.api('openConsentForm')}>Privacy settings</Button>
    </div>
  )
}
