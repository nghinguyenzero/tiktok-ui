import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
function AccountItem(props) {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src={
          'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d14942e0cc480de1d1eb3743518c67c7~c5_300x300.webp?x-expires=1699081200&x-signature=pvB3sb9TaOXsfr3AzeHMexpUiHU%3D'
        }
        alt={''}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvana@gmail.com</span>
      </div>
    </div>
  )
}

export default AccountItem
