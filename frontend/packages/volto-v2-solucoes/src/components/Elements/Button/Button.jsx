import React from 'react';
import cx from 'classnames';
import styles from './Button.module.less';

const Button = ({
  as,
  href,
  children,
  variant = 'primary', // 'primary', 'outline', etc.
  size = 'md', // 'sm', 'md', 'lg'
  className,
  isExternal = false,
  ...rest
}) => {
  const Component = as || (href ? 'a' : 'button');

  const classes = cx(
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${size}`],
    className,
  );

  const extraProps = {};

  if (Component === 'a') {
    extraProps.href = href;
    if (isExternal) {
      extraProps.target = '_blank';
      extraProps.rel = 'noopener noreferrer';
    }
  }

  if (Component === 'button' && !rest.type) {
    extraProps.type = 'button';
  }

  return (
    <Component className={classes} {...extraProps} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
