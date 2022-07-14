import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
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
          <Script
            src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
            strategy='afterInteractive'
            type='module'
          />
          <Script
            src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'
            strategy='afterInteractive'
            type='module'
          />

          <NextScript />
        </body>
      </Html>
    )
  }
}
