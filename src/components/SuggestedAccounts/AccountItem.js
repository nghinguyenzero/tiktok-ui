import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountPreview from './AccountPreview/AccountPreview'
import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles)

function AccountItem(data) {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={data?.data} />
        </PopperWrapper>
      </div>
    )
  }

  const { followerCount, heartCount, user } = data.data

  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <img className={cx('avatar')} src={user?.avatarMedium} alt="" />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>{user?.uniqueId}</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>{user?.nickname}</p>
          </div>
        </div>
      </Tippy>
    </div>
  )
}

// AccountItem.propTypes = {}

export default AccountItem
