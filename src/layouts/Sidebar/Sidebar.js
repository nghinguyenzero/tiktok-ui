import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccounts'

const cx = classNames.bind(styles)

function Sidebar(props) {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For you"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        ></MenuItem>
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        ></MenuItem>
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />}></MenuItem>
      </Menu>
      <SuggestedAccounts label="Suggested Accounts" />
      <SuggestedAccounts label="Following Acounts" />
    </aside>
  )
}

export default Sidebar
