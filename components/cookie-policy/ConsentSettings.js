// External packages
import { useState, useEffect } from "react"
// Internal modules
import * as gaConsent from "../../utils/gaConsent"

// Checkboxes to inform that functional cookies are always set and to set statistics cookie preferences
export default function ConsentSettings() {

  // Get consent status on browser side
  const [statConsent, setStatConsent] = useState(false)

  useEffect(() => {
    setStatConsent(gaConsent.get('granted'))
  }, [])

  // Update consent status when toggling statistics switch
  function handleStatChange(e) {
    const consent = e.target.checked ? 'granted' : 'denied'
    gaConsent.set(consent)
    setStatConsent(consent)
  }

  return (
    <div>
      <div className="ml-4">
        <input type="checkbox" className="form-check-input" id="functional" checked disabled />
        <label htmlFor="functional" className="form-check-label"> Functional cookies (see the explanation above)</label>
      </div>
      <div className="ml-4">
        <input type="checkbox" className="form-check-input" id="statistics" checked={statConsent === 'granted'} onChange={handleStatChange} />
        <label htmlFor="statistics" className="form-check-label"> Statistics cookies (anonymous, see the explanation above)</label>
      </div>
    </div>
  );
}
