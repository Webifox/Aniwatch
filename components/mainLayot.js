import { Footer } from './footer'
import { Header } from './header'
import Head from 'next/head'

export function MainLayot({ children }) {
  return (
    <>
      <Head>
        <link
          rel='shortcut icon'
          href='../assets/images/header_icon(main).ico'
          type='image/x-icon'
        />
        <meta
          name='keyworlds'
          content='anime, watching, anime-serials, serial, films, animations, comfort'
        />
        <meta
          name='description'
          content='Watch anime on Aniwatch with comforts!'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
