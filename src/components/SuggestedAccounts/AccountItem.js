import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        alt="avatar"
        src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/7048172423539228674.jpeg?x-expires=1702029600&amp;x-signature=zSZbANLNoIW9CEYaytpG1fTss5E%3D"
      ></img>
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>nguyenvana</strong>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </p>
        <p className={cx('name')}>Nguyen Van B</p>
      </div>
    </div>
  )
}

// AccountItem.propTypes = {}

export default AccountItem
