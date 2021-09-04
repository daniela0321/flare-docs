// Key for storing consent preferences in local storage
const GA_STORAGE_TOKEN = 'ga_analytics_storage'
const ADMIN_TOKEN = 'admin_user'

// Pass consent preferences to Google Analytics and update local storage
export function set(consent) {
  window.gtag('consent', 'update', {
    'analytics_storage': consent
  });
  localStorage.setItem(GA_STORAGE_TOKEN, consent)
}

// Return the consent preference or the provided default if not available.
export function get(dflt) {
  return localStorage.getItem(GA_STORAGE_TOKEN) || dflt
}