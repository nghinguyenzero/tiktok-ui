import classNames from 'classnames/bind'
import PostItem from '../PostItem'
import styles from './PostList.module.scss'

const cx = classNames.bind(styles)
function PostList() {
  const postList = [
    {
      id: '7132038941537469441',
      urlVideo: 'https://v3.cdnpk.net/videvo_files/video/free/2014-12/large_watermarked/Raindrops_Videvo_preview.mp4',
      uniqueId: '3110nguyenthuyhang',
      nickname: 'Nguyễn Thuý Hằng🧸',
      tick: true,
      full_name: 'Nguyễn Thuý Hằng🧸',
      avatar:
        'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/cdf22cfbdb97bb24261cf554e7c8d3e3~c5_720x720.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=FAkkvla%2FvmJbUOV1zcoAYAdJ674%3D',
      avatarMedium:
        'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/cdf22cfbdb97bb24261cf554e7c8d3e3~c5_720x720.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=FAkkvla%2FvmJbUOV1zcoAYAdJ674%3D',
    },
    {
      id: '7214883166288348186',
      urlVideo: 'https://v3.cdnpk.net/videvo_files/video/free/2022-01/large_preview/220114_01_Drone_4k_017.mp4',
      uniqueId: 'chamsocsuckhoe19',
      tick: false,
      nickname: 'Chăm sóc sức khoẻ ❤️',
      full_name: 'Chăm sóc sức khoẻ ❤️',
      avatar:
        'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a0347be2fb1a2e18d61379eef2b3b0a1.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=ICjrR4DG07auHZPGx9QMik6FrB0%3D',
      avatarMedium:
        'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a0347be2fb1a2e18d61379eef2b3b0a1.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=ICjrR4DG07auHZPGx9QMik6FrB0%3D',
    },
    {
      id: '6834677521386013701',
      urlVideo: 'https://v3.cdnpk.net/videvo_files/video/free/2019-11/large_preview/190301_1_25_11.mp4',
      uniqueId: 'eresfitness',
      nickname: 'EresFitness',
      full_name: 'EresFitness',
      tick: true,
      avatar:
        'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1a5335e448ab6e4c3b70ec19543b21e7~c5_720x720.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=BoDLaA%2BOYroLBHpyP4fzmDd4MG0%3D',
      avatarMedium:
        'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1a5335e448ab6e4c3b70ec19543b21e7~c5_720x720.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=BoDLaA%2BOYroLBHpyP4fzmDd4MG0%3D',
    },
  ]
  return (
    <div className={cx('post-list')}>
      {postList.map((item, index) => (
        <PostItem key={index} data={item} />
      ))}
    </div>
  )
}
PostList.propTypes = {
  // data: PropTypes.array.isRequired,
}
export default PostList
