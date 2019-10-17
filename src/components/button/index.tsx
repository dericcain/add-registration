import React from 'react';

import styles from './button.module.scss';

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
}

interface ButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = ButtonType.Default,
  children,
  onClick,
  ...props
}) => (
  <button className={`${styles.button} ${styles[type]}`} onClick={onClick} {...props}>
    {children}
  </button>
);
