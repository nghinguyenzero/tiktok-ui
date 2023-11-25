import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({
  to,
  href,
  text = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  rounded = false,
  disabled = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button'

  const classes = cx('wrapper', { [className]: className, text, primary, outline, small, large, rounded, disabled })

  const props = {
    onClick,
    ...passProps,
  }

  //   Remove event listener when btn disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      // remove các event có 'on'Click ở đầu
      if (key.startsWith('on') && typeof (props[key] = 'function')) {
        delete props.onClick
      }
    })
  }
  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button
