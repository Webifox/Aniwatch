import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export function Header({}) {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <Link href='#'>
            <a className='header__logo'>
              <Image
                className='logo-item'
                src={'/assets/images/header/logoss.png'}
                height={'50px'}
                width={'50px'}
                alt='Logo'
                layout='fixed'
                quality='100'
                priority='true'
              />
              <p>
                <span className='logo-name'>Aniwatch</span>
                <span className='logo-subname'>Look with comfort!</span>
              </p>
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
                  <FontAwesomeIcon icon={faFilter} />
                </button>
                <button
                  className='search__btn search-btn'
                  type='submit'
                  formEncType='text/plain'
                  form='anime-get'
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                  className='search__input'
                  type='text'
                  placeholder='Find what you want'
                  form='anime-get'
                />
              </form>
            </div>
            <div className='search__filter'>
              <div className='filter__wrap'>
                <div className='filter__item age'>
                  <p>There should be a years filter here</p>
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
                    <a className='menu__link'>Top anime</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a className='menu__link'>Your anime</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a className='menu__link'>Profile</a>
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
