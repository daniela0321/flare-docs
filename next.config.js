module.exports = {
  reactStrictMode: true,
  env: {
    // URL environment variable is needed because this is automatically provided by Netlify.
    // Take URL environment variable and make it available to the browser as SITE_URL.
    SITE_URL: process.env.URL,
    // A path in the public folder that is not tracked in Git. Used to exclude e.g. large images
    LOCAL_PATH: process.env.LOCAL_PATH
  }
}
