import Script from "next/script";
import { useEffect } from "react";
import * as gaConsent from "../../utils/gaConsent"

// Add scripts required by Google Analytics
export default function GoogleAnalytics() {
  // Set up Google Analytics, set consent preferences (defaults to only allow Google Analytics) and initialise.
  // See https://developers.google.com/gtagjs/devguide/consent
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); }

    window.gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': gaConsent.get('granted')
    });

    window.gtag('js', new Date());
    window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID);
  }, [])

  // Google Analytics base script
  return (
    < Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} />
  )
}