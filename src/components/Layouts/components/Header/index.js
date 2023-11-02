import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '~/components/Popper'
// import 'tippy.js/dist/tippy.css' // optional
import styles from './Header.module.scss'
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function Header(props) {
  const [searchResult, setSearchResult] = useState([1, 2])
  setTimeout(() => {
    setSearchResult([1, 2, 3])
  }, 1000)

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        {/* Search */}
        <img src={images.logo} alt="Tiktok" />
        <Tippy
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex={1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
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

        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button
            primary
            // className={cx('custom-login')}
            // rightIcon={<FontAwesomeIcon icon={faSignIn} />}
            // onClick={() => alert('111')}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
