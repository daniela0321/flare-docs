module.exports = {
  reactStrictMode: true,
  env: {
    // URL environment variable is needed because this is automatically provided by Netlify.
    // Take URL environment variable and make it available to the browser as SITE_URL.
    SITE_URL: process.env.URL,
    // A path in the public folder that is not tracked in Git. Used to exclude e.g. large images
    LOCAL_PATH: process.env.LOCAL_PATH,
  },
  async rewrites() {
    return [
      {
        source: '/insights',
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
            value: "default-src 'self'; "
              + "font-src 'self' data:; "
              + "style-src 'self' 'unsafe-inline'; "
              + "img-src 'self' 'unsafe-inline' data: https://flarehub.io https://www.google-analytics.com; "
              + "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com; "
              + "connect-src 'self' https://www.google-analytics.com https://*.algolia.net https://*.algolianet.com https://flarehub.io/;"
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
