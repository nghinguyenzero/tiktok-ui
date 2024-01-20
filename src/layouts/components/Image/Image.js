import { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import images from '~/assets/images'
import styles from './Image.module.scss'
import classNames from 'classnames'

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.avatarUser, ...props }, ref) => {
  const [fallback, setFallback] = useState('')
  const handleError = () => {
    setFallback(customFallback) // khi Image Error sẽ lấy imge fallback
  }

  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      ref={ref}
      {...props}
      onError={handleError}
    />
  )
})

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
}

export default Image
