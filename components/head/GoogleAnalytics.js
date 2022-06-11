// External modules:
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useState } from 'react';

export default function GoogleAnalytics() {
  // Check if current visitor is admin
  const [isAdmin, setIsAdmin] = useState(1)
  useEffect(() => setIsAdmin(localStorage.getItem('is_admin')), [setIsAdmin])

  // Send page changes to Google analytics
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      if (window.gtag) {
        window.gtag('set', 'page_path', document.location.pathname)
        window.gtag('event', 'page_view')
      }
    })
  }, [])

  // Initialize Google Analytics
  function initGa() {
    // Register global tag function
    if (typeof window === 'undefined') return
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); }

    // Check consent status from Piwik Pro
    let consentStatus
    window.ppms.cm.api('getComplianceSettings', settings => {
      consentStatus = settings.consents.analytics ?? -1
    })

    // Set consent status in Google Analytics
    window.gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': consentStatus === 0 ? 'denied' : 'granted'
    });

    // Configure Google Analytics
    window.gtag('js', new Date());
    window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID);
  }

  // Add external Google Analytics script
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