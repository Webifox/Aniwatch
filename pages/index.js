import Head from 'next/head'
import { MainLayot } from '../components/mainLayot'
import { ShowBgBtn } from './../components/Button.show-background'
import { SliderBlock } from './../components/slider'

export default function HomePage() {
  return (
    <MainLayot>
      <Head>
        <title>Aniwatch</title>
      </Head>
      <main className='page'>
        <SliderBlock />
      </main>
      <ShowBgBtn />
    </MainLayot>
  )
}
