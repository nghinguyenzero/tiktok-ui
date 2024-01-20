import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './PostItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Image from '../../layouts/components/Image'
import { Link } from 'react-router-dom'
import VideoEmbed from './VideoEmbed'

const cx = classNames.bind(styles)
function PostItem({ data }) {
  return (
    <div className={cx('account-item')}>
      <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
        <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
        <div className={cx('info')}>
          <h4 className={cx('name')}>
            <span>{data.full_name}</span>
            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
          </h4>
          <span className={cx('username')}>{data.nickname}</span>
        </div>
      </Link>
      <VideoEmbed url={data.urlVideo} />
    </div>
  )
}
PostItem.propTypes = {
  data: PropTypes.object.isRequired,
}
export default PostItem
