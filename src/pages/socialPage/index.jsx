import s from './styles.module.scss'
import images from 'images'

const linkData = [
  {
    field: 'REVIEWS',
    link: 'https://g.page/r/CYUmIx3lky96EB0/review',
    image: images.review
  },
  {
    field: 'INSTAGRAM',
    link: 'https://instagram.com/cosmedicaaby_drvimitaagarwal?igshid=MzRlODBiNWFlZA==',
    image: images.instagram
  },
  {
    field: 'FACEBOOK',
    link: 'https://www.facebook.com/profile.php?id=100094414283983&mibextid=nW3QTL',
    image: images.facebook
  }
]

export default function Main() {
  return (
    <div className={s.main}>
      <div className={s.inner}>
        <div className={s.header}>
          <div className={s.logo}>
            <img src={images.logo} alt='' />
          </div>
          <div className={s.content}>
            Aesthetics & cosmetic medicine Centre
            <span>(Laser - Skin - hair - Anti-aging)</span>
          </div>
        </div>
        <div className={s.title}>Click Here For</div>
        <div className={s.links}>
          {linkData.map(({ field, link, image }, i) => (
            <a href={link} key={i} className={s.link} target='_blank' rel='noreferrer'>
              <div>
                <img src={image} alt='' />
              </div>
              <div>{field}</div>
            </a>
          ))}
        </div>
        <div className={s.bottom}>
          <div className={s.right}>
            <img src={images.user} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
