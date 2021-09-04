import Script from "next/script";
import { useEffect, useState } from "react";
import * as gaConsent from "../../utils/gaConsent"

// Add scripts required by Google Analytics
export default function GoogleAnalytics() {
  // Create empty element to be replaced with script in browser
  const [gaScript, setGaScript] = useState(<></>)

  useEffect(() => {
    // Set up Google Analytics, set consent preferences (defaults to only allow Google Analytics) and initialise.
    // See https://developers.google.com/gtagjs/devguide/consent
    function initGa() {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { dataLayer.push(arguments); }

      window.gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': gaConsent.get('granted')
      });

      window.gtag('js', new Date());
      window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID);
    }

    // Check if user is not an administrator
    if (localStorage.getItem('is_admin') !== '1') {
      // Add Google Analytics script to App and initiate Google Analytics when it's loaded
      setGaScript(< Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        onLoad={initGa}
      />)
    }
  }, [])

  return gaScript
}