import Image from 'next/image'
import Link from 'next/link'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function SliderBlock() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
            {
                breakpoint: 1364,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 764,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
  }

  const date = new Date()
  const options = {
    month: 'long',
  }

  return (
    <>
      <section className='popular-anime'>
        <div className='popular-anime__container section-container'>
          <div className='popular-anime__title section-title'>
            <h1>
              Popular anime in {date.toLocaleDateString('en-US', options)}
            </h1>
          </div>
          <Slider {...settings} className='popular-anime__list'>
            <div className='popular-anime__item'>
              <div className='popular-anime__preview'>
                <Link href={'#'}>
                  <a>
                    <div className='popular-anime__img'>
                      <Image
                        src='/assets/images/anime-list/attack5_2s.jpg'
                        alt=''
                        width={'200px'}
                        height={'280px'}
                        layout='fixed'
                        priority={true}
                      />
                      <div className='img-overlay'>
                        <i className='fa-solid fa-circle-play'></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <p className='popular-anime__name'>
                Attack on titan final season part 2
              </p>
              <p className='popular-anime__genre'>
                Senen, Action Drama, Fantasy, Detective, Military, Superpower
              </p>
            </div>
            <div className='popular-anime__item'>
              <div className='popular-anime__preview'>
                <Link href={'#'}>
                  <a href='#'>
                    <div className='popular-anime__img'>
                      <Image
                        src='/assets/images/anime-list/bluelock_2s.jpg'
                        alt=''
                        width={'200px'}
                        height={'280px'}
                        layout='fixed'
                        priority={true}
                      />
                      <div className='img-overlay'>
                        <i className='fa-solid fa-circle-play'></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <p className='popular-anime__name'>Blue Lock</p>
              <p className='popular-anime__genre'>Senen, Sport</p>
            </div>
            <div className='popular-anime__item'>
              <div className='popular-anime__preview'>
                <Link href={'#'}>
                  <a href='#'>
                    <div className='popular-anime__img'>
                      <Image
                        src='/assets/images/anime-list/shuumatsunoharem_2s.jpg'
                        alt=''
                        width={'200px'}
                        height={'280px'}
                        layout='fixed'
                        priority={true}
                      />
                      <div className='img-overlay'>
                        <i className='fa-solid fa-circle-play'></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <p className='popular-anime__name'>Shuumatsu no Harem</p>
              <p className='popular-anime__genre'>
                Senen, Fantasy, Etti, Harem
              </p>
            </div>
            <div className='popular-anime__item'>
              <div className='popular-anime__preview'>
                <Link href={'#'}>
                  <a href='#'>
                    <div className='popular-anime__img'>
                      <Image
                        src='/assets/images/anime-list/sonobisquedollwakoiwosuru_1s.jpg'
                        alt=''
                        width={'200px'}
                        height={'280px'}
                        layout='fixed'
                        priority={true}
                      />
                      <div className='img-overlay'>
                        <i className='fa-solid fa-circle-play'></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <p className='popular-anime__name'>
                Sono Bisque Doll wa Koi wo Suru
              </p>
              <p className='popular-anime__genre'>Seinen, Romantics</p>
            </div>
            <div className='popular-anime__item'>
              <div className='popular-anime__preview'>
                <Link href={'#'}>
                  <a href='#'>
                    <div className='popular-anime__img'>
                      <Image
                        src='/assets/images/anime-list/spyxfamily_3s.jpg'
                        alt=''
                        width={'200px'}
                        height={'280px'}
                        layout='fixed'
                        priority={true}
                      />
                      <div className='img-overlay'>
                        <i className='fa-solid fa-circle-play'></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <p className='popular-anime__name'>Spy x family</p>
              <p className='popular-anime__genre'>Senen, Action, Comedy</p>
            </div>
            <div className='popular-anime__item'>
              <div className='popular-anime__preview'>
                <Link href={'#'}>
                  <a href='#'>
                    <div className='popular-anime__img'>
                      <Image
                        src='/assets/images/anime-list/tatenoyuushanonariagari2_1t.jpg'
                        alt=''
                        width={'200px'}
                        height={'280px'}
                        layout='fixed'
                        priority={true}
                      />
                      <div className='img-overlay'>
                        <i className='fa-solid fa-circle-play'></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <p className='popular-anime__name'>
                The Rising of The Shield Hero Season 2
              </p>
              <p className='popular-anime__genre'>
                Action, Adventure, Drama, Fantasy
              </p>
            </div>
            <div className='popular-anime__item'>
              <div className='popular-anime__preview'>
                <Link href={'#'}>
                  <a href='#'>
                    <div className='popular-anime__img'>
                      <Image
                        src='/assets/images/anime-list/Kaguya-sama_wa_Kokurasetai_Ultra_Romantic.jpg'
                        alt=''
                        width={'200px'}
                        height={'280px'}
                        layout='fixed'
                        priority={true}
                      />
                      <div className='img-overlay'>
                        <i className='fa-solid fa-circle-play'></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <p className='popular-anime__name'>
                Kaguya-sama wa Kokurasetai: Ultra Romantic
              </p>
              <p className='popular-anime__genre'>Comedy, Suspense</p>
            </div>
            <div className='popular-anime__item'>
              <div className='popular-anime__preview'>
                <Link href={'#'}>
                  <a href='#'>
                    <div className='popular-anime__img'>
                      <Image
                        src='/assets/images/anime-list/Kawaii_dake_ja_Nai_Shikimori-san.jpg'
                        alt=''
                        width={'200px'}
                        height={'280px'}
                        layout='fixed'
                        priority={true}
                      />
                      <div className='img-overlay'>
                        <i className='fa-solid fa-circle-play'></i>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <p className='popular-anime__name'>
                Kawaii dake ja Nai Shikimori-san
              </p>
              <p className='popular-anime__genre'>Comedy, Romance</p>
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}
