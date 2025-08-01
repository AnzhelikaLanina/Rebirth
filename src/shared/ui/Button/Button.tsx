import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonProps = {
  className?: string;
  icon?: ReactNode;
  text?: string;
  classNameText?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export const Button = ({
  className,
  icon,
  text,
  classNameText,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(styles.buttonBase, className)}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <p className={clsx(styles.text, classNameText)}>{text}</p>
    </button>
  );
};
