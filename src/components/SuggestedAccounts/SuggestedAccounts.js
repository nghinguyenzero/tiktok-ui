import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'

const cx = classNames.bind(styles)

function SuggestedAccounts({ label }) {
  const data = {
    extra: {
      fatal_item_ids: [],
      logid: '20240119110643EB225463B1C06A18EEDA',
      now: 1705662405000,
    },
    hasMore: true,
    log_pb: {
      impr_id: '20240119110643EB225463B1C06A18EEDA',
    },
    maxCursor: 1703774830,
    minCursor: 1684607391,
    statusCode: 0,
    status_code: 0,
    total: 52,
    userList: [
      {
        stats: {
          diggCount: 909,
          followerCount: 1311,
          followingCount: 2832,
          friendCount: 0,
          heart: 8516,
          heartCount: 8516,
          videoCount: 189,
        },
        user: {
          avatarLarger:
            'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a0347be2fb1a2e18d61379eef2b3b0a1.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=tUDync8K7bC%2B0kQtYm9nbYi9i%2FU%3D',
          avatarMedium:
            'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a0347be2fb1a2e18d61379eef2b3b0a1.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=ICjrR4DG07auHZPGx9QMik6FrB0%3D',
          avatarThumb:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a0347be2fb1a2e18d61379eef2b3b0a1.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=v8M97ZIAtuQVwbEdthcP4tVN9%2BY%3D',
          commentSetting: 0,
          downloadSetting: 3,
          duetSetting: 0,
          ftc: false,
          id: '7214883166288348186',
          isADVirtual: false,
          nickname: 'Chăm sóc sức khoẻ ❤️❤️',
          openFavorite: false,
          privateAccount: false,
          relation: 1,
          secUid: 'MS4wLjABAAAAr-DT-_InGzjIDHtb-b7_bdBeS9SsfMUdE_iIi-xItnt-bDYgwRIXEryEWweWr0rb',
          secret: false,
          signature: 'Các sản phẩm chăm sóc sức khoẻ ❤️❤️',
          stitchSetting: 0,
          ttSeller: true,
          uniqueId: 'chamsocsuckhoe19',
          verified: false,
        },
      },
      {
        stats: {
          diggCount: 69,
          followerCount: 5800000,
          followingCount: 1,
          friendCount: 0,
          heart: 31200000,
          heartCount: 31200000,
          videoCount: 648,
        },
        user: {
          avatarLarger:
            'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1a5335e448ab6e4c3b70ec19543b21e7~c5_1080x1080.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=Tfrj3vnz0vF6%2F%2FN8fPcVitIiD80%3D',
          avatarMedium:
            'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1a5335e448ab6e4c3b70ec19543b21e7~c5_720x720.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=BoDLaA%2BOYroLBHpyP4fzmDd4MG0%3D',
          avatarThumb:
            'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1a5335e448ab6e4c3b70ec19543b21e7~c5_100x100.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=QcHvyWnPAnVx9AIrnck%2FbOsVQKA%3D',
          commentSetting: 0,
          downloadSetting: 0,
          duetSetting: 0,
          ftc: false,
          id: '6834677521386013701',
          isADVirtual: false,
          nickname: 'EresFitness',
          openFavorite: false,
          privateAccount: false,
          relation: 1,
          secUid: 'MS4wLjABAAAAt_gCAaidceIZSbcvwQKBhBqu1HacP2ZnbC1cpNwFzjB23M_hbnJoqF-CZVU78Fqo',
          secret: false,
          signature: 'Disponible en Play store y App store 💪📱\n          👇👇👇👇',
          stitchSetting: 0,
          ttSeller: false,
          uniqueId: 'eresfitness',
          verified: true,
        },
      },
      {
        stats: {
          diggCount: 2,
          followerCount: 1,
          followingCount: 6,
          friendCount: 0,
          heart: 0,
          heartCount: 0,
          videoCount: 0,
        },
        user: {
          avatarLarger:
            'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tiktok-obj/7048172423539228674.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=ndZTF1KBuP35O36oQ%2BoB%2Bkl40hc%3D',
          avatarMedium:
            'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/7048172423539228674.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=ZJ8nJ5iNPrIhmjDdJoCsE3wRbik%3D',
          avatarThumb:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/7048172423539228674.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=plVaRBVB388vFQHml37JeIozU5I%3D',
          commentSetting: 0,
          downloadSetting: 0,
          duetSetting: 0,
          ftc: false,
          id: '7043933001327723521',
          isADVirtual: false,
          nickname: 'Huyen Trinh Truon706',
          openFavorite: false,
          privateAccount: false,
          relation: 2,
          secUid: 'MS4wLjABAAAAigWqMdq_mgskmBGxJHymdUE12ImeTsaGwFplAdzKAB5KaSy_cY1-0sKYzwRioGpe',
          secret: false,
          signature: '',
          stitchSetting: 0,
          ttSeller: false,
          uniqueId: 'huyentrinh0510',
          verified: false,
        },
      },
      {
        stats: {
          diggCount: 437,
          followerCount: 71,
          followingCount: 176,
          friendCount: 0,
          heart: 82,
          heartCount: 82,
          videoCount: 11,
        },
        user: {
          avatarLarger:
            'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tiktok-obj/1660329376851969.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=Xn8Abng%2BgQZCup48BjQEN99fQOE%3D',
          avatarMedium:
            'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1660329376851969.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=PUyMdcHZzmE1t0eFAts0obQyS3U%3D',
          avatarThumb:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1660329376851969.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=pOwq0sZAbj1tX40PIt1m1rtC6qI%3D',
          commentSetting: 0,
          downloadSetting: 0,
          duetSetting: 0,
          ftc: false,
          id: '6762677546623599618',
          isADVirtual: false,
          nickname: 'HỒNG TÁO TÙNG',
          openFavorite: false,
          privateAccount: false,
          relation: 2,
          secUid: 'MS4wLjABAAAA6ZorBnO2rq7-oRIp9Rg-Am8mCRsHEggUMzK3CdAzVTR9A3C3w5LkXqeSl-9_59Yz',
          secret: false,
          signature: 'suy cho cùng',
          stitchSetting: 0,
          ttSeller: false,
          uniqueId: 'hongtaotung',
          verified: false,
        },
      },
      {
        stats: {
          diggCount: 6405,
          followerCount: 1791,
          followingCount: 593,
          friendCount: 0,
          heart: 7985,
          heartCount: 7985,
          videoCount: 29,
        },
        user: {
          avatarLarger:
            'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/8994b937fd784166f1afa29e6610d936.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=zsTZR1e0MRYTWk8X1i1Yqb8Du40%3D',
          avatarMedium:
            'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/8994b937fd784166f1afa29e6610d936.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=fF4vXXe%2BdTV%2F8wgFvbXMom6KQhs%3D',
          avatarThumb:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8994b937fd784166f1afa29e6610d936.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=hEsl0DgW%2F6DhWNCA2n1yzFUvyyI%3D',
          commentSetting: 0,
          downloadSetting: 0,
          duetSetting: 0,
          ftc: false,
          id: '6818863568633840641',
          isADVirtual: false,
          nickname: 'Mai Thanh Hằng',
          openFavorite: false,
          privateAccount: false,
          relation: 1,
          secUid: 'MS4wLjABAAAAOcrmLP8114TgzKjYBcguiGBUf7FHWgJFVs4Vy-qa4kyOdPhzH4bw8vV3gsASGqpI',
          secret: false,
          signature: '',
          stitchSetting: 3,
          ttSeller: false,
          uniqueId: 'maihang751',
          verified: false,
        },
      },
      {
        stats: {
          diggCount: 2044,
          followerCount: 99500,
          followingCount: 53,
          friendCount: 0,
          heart: 484100,
          heartCount: 484100,
          videoCount: 190,
        },
        user: {
          avatarLarger:
            'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7311351395725082656~c5_1080x1080.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=yZf4N%2BiEcHWxOXBDXt7PdUgtPkQ%3D',
          avatarMedium:
            'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7311351395725082656~c5_720x720.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=yTAxWVWvTb2n0BB8wtYc50GWt18%3D',
          avatarThumb:
            'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7311351395725082656~c5_100x100.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=gUoHyBYXnvWXlFywTl5pMOuL%2FmY%3D',
          commentSetting: 0,
          downloadSetting: 0,
          duetSetting: 0,
          ftc: false,
          id: '7201556239532114950',
          isADVirtual: false,
          nickname: 'Zun chia sẻ',
          openFavorite: false,
          privateAccount: false,
          relation: 1,
          secUid: 'MS4wLjABAAAAWSzTA-y0WBxMpOP63U2OAwwTR_2p8wV5DcP1ohE2G28QP4gzmAPDGUdC_sC-JApv',
          secret: false,
          signature: 'Coach tiktok 1:1. Nhận xây kênh và vận hành bán hàng 5-15%\nInsta : hoan.ttqta',
          stitchSetting: 0,
          ttSeller: true,
          uniqueId: 'hoannt.tiktok',
          verified: false,
        },
      },
      {
        stats: {
          diggCount: 32400,
          followerCount: 85,
          followingCount: 3155,
          friendCount: 0,
          heart: 189,
          heartCount: 189,
          videoCount: 20,
        },
        user: {
          avatarLarger:
            'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/7fedfc73b38806d31ba08c35abeff40b.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=m5a9UQI0aPWVxDOXc10m3Tm12Zk%3D',
          avatarMedium:
            'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7fedfc73b38806d31ba08c35abeff40b.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=tnpYH5DTr3u%2BqvYSP4c%2BTw%2BSzlo%3D',
          avatarThumb:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7fedfc73b38806d31ba08c35abeff40b.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=hdFH5SiE5s97DA1Iwj51%2BCtKqvo%3D',
          commentSetting: 0,
          downloadSetting: 0,
          duetSetting: 3,
          ftc: false,
          id: '6562608740604231682',
          isADVirtual: false,
          nickname: 'Lệ Mỹ Đinh',
          openFavorite: false,
          privateAccount: false,
          relation: 1,
          secUid: 'MS4wLjABAAAApe_iYCva37sGbmjDKykkb8mugyTgwOvd--yCfgQcIo32VrXpCJvOXBBQaH62xR2a',
          secret: false,
          signature: "💃 hey, what's up???",
          stitchSetting: 3,
          ttSeller: false,
          uniqueId: 'yah_dml',
          verified: false,
        },
      },
      {
        stats: {
          diggCount: 1404,
          followerCount: 74,
          followingCount: 114,
          friendCount: 0,
          heart: 418,
          heartCount: 418,
          videoCount: 21,
        },
        user: {
          avatarLarger:
            'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/cdf22cfbdb97bb24261cf554e7c8d3e3~c5_1080x1080.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=WUh%2BXgBk1J%2Bt4fMK7rMpYyRr%2F58%3D',
          avatarMedium:
            'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/cdf22cfbdb97bb24261cf554e7c8d3e3~c5_720x720.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=FAkkvla%2FvmJbUOV1zcoAYAdJ674%3D',
          avatarThumb:
            'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/cdf22cfbdb97bb24261cf554e7c8d3e3~c5_100x100.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=MIM%2BcHa5G5ZoS%2FeF8hZtU7P%2BM7s%3D',
          commentSetting: 0,
          downloadSetting: 0,
          duetSetting: 0,
          ftc: false,
          id: '7132038941537469441',
          isADVirtual: false,
          nickname: 'Nguyễn Thuý Hằng🧸',
          openFavorite: false,
          privateAccount: false,
          relation: 2,
          secUid: 'MS4wLjABAAAAgKGIq5Tq_DoFylccH3mPTRq8vSdLB7w-beA_3PJ_9fKdD-7Pc4HdQ9FbRwD8Oqcb',
          secret: false,
          signature: '',
          stitchSetting: 0,
          ttSeller: false,
          uniqueId: '3110nguyenthuyhang',
          verified: false,
        },
      },
      {
        stats: {
          diggCount: 2584,
          followerCount: 375,
          followingCount: 100,
          friendCount: 0,
          heart: 391,
          heartCount: 391,
          videoCount: 4,
        },
        user: {
          avatarLarger:
            'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/005cab1d1e33dd1c0d9a0ee95c59cf2d.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=Pot8hMkVPxr4k7cz%2FnVNGSzcSAE%3D',
          avatarMedium:
            'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/005cab1d1e33dd1c0d9a0ee95c59cf2d.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=9zKSlEM8yi1ZDhLnoj%2B%2BEkiY9i0%3D',
          avatarThumb:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/005cab1d1e33dd1c0d9a0ee95c59cf2d.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=qoVV5r1eWqe1Sce%2F2TswCCJi6Ks%3D',
          commentSetting: 0,
          downloadSetting: 0,
          duetSetting: 0,
          ftc: false,
          id: '6716080723294815233',
          isADVirtual: false,
          nickname: '𝑵𝒈𝒐̣𝒄 𝑸𝒖𝒂́ 🍓',
          openFavorite: false,
          privateAccount: false,
          relation: 1,
          secUid: 'MS4wLjABAAAA89RnRFkXnUUFKyq_5q6PtCbkALPDMQwKZpUlzd-Es0Dzwk_Y2B2XCimgeY8cgeqg',
          secret: false,
          signature: '❤️',
          stitchSetting: 0,
          ttSeller: false,
          uniqueId: '_ngocqua.2903',
          verified: false,
        },
      },
      {
        stats: {
          diggCount: 4111,
          followerCount: 215,
          followingCount: 825,
          friendCount: 0,
          heart: 2610,
          heartCount: 2610,
          videoCount: 124,
        },
        user: {
          avatarLarger:
            'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/08e67a47e9ad09ab7e2a111e0f4f7bc0.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=vGtYBNO0uumf6V2NkJSMRPnZcik%3D',
          avatarMedium:
            'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/08e67a47e9ad09ab7e2a111e0f4f7bc0.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=XU6vl%2FYYqLwBBiFamMZGQnlmWVM%3D',
          avatarThumb:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/08e67a47e9ad09ab7e2a111e0f4f7bc0.jpeg?lk3s=a5d48078\u0026x-expires=1705834800\u0026x-signature=yqMOuogh1cWTBddZPrnqUPfGHvQ%3D',
          commentSetting: 0,
          downloadSetting: 0,
          duetSetting: 0,
          ftc: false,
          id: '6602045269306277890',
          isADVirtual: false,
          nickname: 'Lê Thị Ngọc Ánhh',
          openFavorite: false,
          privateAccount: false,
          relation: 2,
          secUid: 'MS4wLjABAAAA5Bahz05nL9YB5qlKOlO02xU_VqdN9s6Td68th6Q1MTegpxePC-I7qiv_1kKElUwK',
          secret: false,
          signature: '',
          stitchSetting: 0,
          ttSeller: false,
          uniqueId: 'hanieanhh',
          verified: false,
        },
      },
    ],
  }
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {data.userList.map((item, index) => (
        <AccountItem key={index} data={item} />
      ))}
      <p className={cx('more-btn')}>See all</p>
    </div>
  )
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
}

export default SuggestedAccounts
