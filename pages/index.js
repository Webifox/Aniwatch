import Head from 'next/head'
import { MainLayot } from '../components/mainLayot'
import { ShowBgBtn } from './../components/Button.show-background'
import { SliderBlock } from './../components/slider'
import { AnonceList } from '../components/update-anime'

export default function HomePage() {
  return (
    <MainLayot>
      <Head>
        <title>Aniwatch</title>
      </Head>
      <main className='page'>
        <SliderBlock />
        <AnonceList />
      </main>
      <ShowBgBtn />
    </MainLayot>
  )
}
