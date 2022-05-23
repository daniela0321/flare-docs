const { randomUUID } = require("crypto")

// const piwikUUID = randomUUID()

function generateCSP(csp) {
  return Object.entries(csp).reduce((res, rule) => {
    return res + rule[0] + ' ' + rule[1].join(' ') + '; '
  }, '')
}

module.exports = {
  reactStrictMode: true,
  env: {
    // URL environment variable is needed because this is automatically provided by Netlify.
    // Take URL environment variable and make it available to the browser as SITE_URL.
    SITE_URL: process.env.URL,
    BUILD_URL: process.env.DEPLOY_PRIME_URL,
    // A path in the public folder that is not tracked in Git. Used to exclude e.g. large images
    LOCAL_PATH: process.env.LOCAL_PATH,
    // Tracking id and nonce for Piwik Pro Tag Manager.
    PIWIK_TAG_ID: process.env.PIWIK_TAG_ID,
    // PIWIK_NONCE: piwikUUID
  },
  async rewrites() {
    return [
      {
        source: '/insights/',
        destination: '/insights/p/1',
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: 'Content-Security-Policy',
            value: generateCSP({
              'default-src': ["'self'"],
              'style-src': [
                "'self'",
                "'unsafe-inline'",
                "https://flarehub.containers.piwik.pro"
              ],
              'img-src': [
                "'self'",
                "'unsafe-inline'",
                "data:",
                "flarehub.io",
                "flarehub.piwik.pro",
                "flarehub.containers.piwik.pro",
                "www.google-analytics.com"
              ],
              'script-src': [
                "'self'",
                "'unsafe-inline'",
                "'unsafe-eval'",
                "flarehub.containers.piwik.pro",
                "www.google-analytics.com",
                "identity.netlify.com",
              ],
              'connect-src': [
                "'self'",
                "flarehub.piwik.pro",
                "flarehub.containers.piwik.pro",
                "www.google-analytics.com",
                "*.algolia.net",
                "*.algolianet.com",
                "flarehub.io"
              ],
              'base-uri': ["'none'"],
            })
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      },
      {
        source: "/admin(.*)",
        headers: [
          { key: 'Content-Security-Policy', value: "" },
          { key: 'X-Frame-Options', value: '' }
        ]
      }

    ]
  },
  trailingSlash: true,
}
