import Head from 'next/head'
import { MainLayot } from '../components/mainLayot'
import { ShowBgBtn } from './../components/Button.show-background'

export default function HomePage() {
  return (
    <MainLayot>
      <Head>
        <title>Aniwatch</title>
      </Head>
      <main>
        <section>
          <div className='container'>
            <h2>Anime top in Jule</h2>
          </div>
        </section>
      </main>
      <ShowBgBtn />
    </MainLayot>
  )
}
