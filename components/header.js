import Link from 'next/link'
import Image from 'next/image'

import logo from '../assets/images/header/logo.png'

export function Header({}) {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <Link href='#'>
            <a className='header__logo'>
              <Image src={logo} height={'30px'} width={'30px'} alt='Logo' />
              <p>Aniwatch</p>
            </a>
          </Link>
          <div className='header__search'>
            <div className='search__bar'>
              <form action='' method='post' name='anime-get'>
                <button
                  className='search__btn filter'
                  type='button'
                  formEncType='text/plain'
                >
                  <i className='fa-solid fa-sliders'></i>
                </button>
                <button
                  className='search__btn search-btn'
                  type='submit'
                  formEncType='text/plain'
                  form='anime-get'
                >
                  <i className='fa-solid fa-magnifying-glass'></i>
                </button>
                <input
                  className='search__line'
                  type='text'
                  placeholder='Find what you want'
                  form='anime-get'
                />
              </form>
            </div>
            <div className='search__filter'>
              <div className='filter__wrap'>
                <div className='filter__item age'>
                  <div id='slider'></div>
                </div>
                <div className='filter__item genre'>
                  <p className='filter__title'>Genres</p>
                  <div id='selectGenre'></div>
                </div>
                <div className='filter__item type'>
                  <p className='filter__title'>Type</p>
                  <div id='selectType'></div>
                </div>
                <div className='filter__item status'>
                  <p className='filter__title'>Status</p>
                  <div id='selectStatus'></div>
                </div>
                <div className='filter__item restriction'>
                  <p className='filter__title'>Age limit</p>
                  <div id='selectLimit'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='header__menu menu'>
            <div className='menu__icon'>
              <span></span>
            </div>
            <nav className='menu__body'>
              <ul className='menu__list'>
                <li>
                  <Link href=''>
                    <a className='menu__link'>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a className='menu__link'>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a className='menu__link'>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a className='menu__link'>Home</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
