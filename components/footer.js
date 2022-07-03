import Link from 'next/link'

export function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__info'>
            <Link href={'#'}>
              <a className='footer__info-item'>agreement</a>
            </Link>
            <Link href={'#'}>
              <a className='footer__info-item'>for copyright holders</a>
            </Link>
            <Link href={'#'}>
              <a className='footer__info-item'>confidentiality</a>
            </Link>
          </div>
          <div className='footer__copyright'>
            <p>© webifox.org 2022-infinity</p>
          </div>
        </div>
      </footer>
    </>
  )
}
