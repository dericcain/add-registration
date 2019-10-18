import React from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  color?: 'primary' | 'default';
  children: React.ReactNode;
  onClick: (e?: any) => void;
  type?: 'submit' | 'button';
}

export const Button: React.FC<ButtonProps> = ({
  color = 'default',
  children,
  onClick,
  type,
  ...props
}) => (
  <button className={`${styles.button} ${styles[color]}`} onClick={onClick} type={type} {...props}>
    {children}
  </button>
);
