import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import clsx from 'clsx';

export const Button = ({
  className,
  icon,
  text,
  classNameText,
  onClick,
  type = 'button',
}) => {

  return (
    <button
      type={type}
      className={clsx(styles.buttonBase, className)}
      onClick={onClick}
    >
      {icon && (
        <span className={styles.icon}>
          {icon}
        </span>
      )}
      <p className={clsx(styles.text, classNameText)}>{text}</p>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element,
  text: PropTypes.string,
  classNameText: PropTypes.string,
  type: PropTypes.string,
};
