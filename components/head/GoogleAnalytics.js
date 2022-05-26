import Script from 'next/script'
import { useEffect, useState } from 'react';

export default function GoogleAnalytics() {
  const [isAdmin, setIsAdmin] = useState(1)
  useEffect(() => setIsAdmin(localStorage.getItem('is_admin')), [setIsAdmin])

  function initGa() {
    if (typeof window === 'undefined') return
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); }

    let consentStatus
    window.ppms.cm.api('getComplianceSettings', settings => {
      consentStatus = settings.consents.analytics ?? -1
    })

    window.gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': consentStatus === 0 ? 'denied' : 'granted'
    });

    window.gtag('js', new Date());
    window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID);
  }

  return (
    <>
      {isAdmin !== '1' && <Script
        src={'https://www.googletagmanager.com/gtag/js?id=' + process.env.NEXT_PUBLIC_GA_TRACKING_ID}
        strategy="afterInteractive"
        onLoad={initGa}
      />}
    </>
  )
}