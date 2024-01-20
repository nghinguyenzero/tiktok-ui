import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Button from '~/components/Button'
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview(props) {
  const { stats, user } = props.data
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img className={cx('avatar')} src={user?.avatarMedium} alt="" />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>{user?.uniqueId}</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>{user?.nickname}</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>{stats?.followerCount} </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>{stats?.heartCount} </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  )
}

export default AccountPreview
