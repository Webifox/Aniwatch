import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <Script
            src='https://kit.fontawesome.com/d271021df5.js'
            crossorigin='anonymous'
            strategy='beforeInteractive'
          />
          <Script
            src='/scripts/main.js'
            strategy='afterInteractive'
            type='module'
          />
          <NextScript />
        </body>
      </Html>
    )
  }
}
