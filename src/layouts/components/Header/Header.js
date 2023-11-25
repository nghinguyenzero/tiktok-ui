import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional

import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button/Button'
import Menu from '~/components/Popper/Menu'
import Image from '../Image'

import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons'
import Search from '../Search'
import config from '~/config'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Language',
    children: {
      title: 'Language',
      data: [
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
          children: {
            title: 'Tiếng Việt',
            type: 'Tiếng Việt',
            data: [
              { code: 'vi1', title: 'Tiếng Việt cơ bản' },
              { code: 'vi2', title: 'Tiếng Việt nâng cao' },
            ],
          },
        },
        { type: 'Language', code: 'en', title: 'English' },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
]
function Header(props) {
  const handleMenuChange = (menuItem) => {
    console.log('menuItem', menuItem)
  }

  const currentUser = true

  const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@hoa' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coin' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
  ]
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="Tiktok" />
        </Link>
        {/* SEARCH */}
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt="Username"
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                // src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/7048172423539228674.jpeg?x-expires=1699178400&x-signature=6fLGLcapfTyWCWiLZwCO5nqLL60%3D"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
