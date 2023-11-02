import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
// import 'tippy.js/dist/tippy.css' // optional
import styles from './Header.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Header(props) {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        {/* Search */}
        <img src={images.logo} alt="Tiktok" />
        <Tippy
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex={1} {...attrs}>
              Result
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts or videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('actions')}></div>
      </div>
    </header>
  )
}

export default Header
