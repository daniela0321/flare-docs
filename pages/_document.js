import { Html, Head, Main, NextScript } from 'next/document'
import { randomUUID } from 'crypto'

function generateCSP(csp) {
  return Object.entries(csp).reduce((res, rule) => {
    return res + rule[0] + ' ' + rule[1].join(' ') + '; '
  }, '')
}

export default function Document() {
  const nonce = randomUUID()

  const csp = generateCSP({
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
      "www.googletagmanager.com"
    ],
    'script-src': [
      "'self'",
      `'nonce-${nonce}'`,
      "flarehub.containers.piwik.pro",
      "www.googletagmanager.com",
      "identity.netlify.com",
      process.env.NODE_ENV !== 'production' && "'unsafe-eval'"
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

  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        {/* <script
          async
          src={'https://www.googletagmanager.com/gtag/js?id=' + process.env.GA_PROPERTY_ID}
          nonce={nonce}
        />
        <script async id="google-analytics" nonce={nonce}>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GA_PROPERTY_ID}');
        `}
        </script> */}
      </Head>
      <body data-piwik-nonce={nonce}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}