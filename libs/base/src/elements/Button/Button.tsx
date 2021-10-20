import classNames from 'classnames';
import React from 'react';
import { ButtonVariantType, ColorType, SizeType } from '../../types';
import { Spinner } from '../../common/Spinner';
import './Button.scss';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonVariantType;
  color?: ColorType;
  size?: SizeType;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?(): void;
}

export const Button = ({
  children,
  className,
  color = 'primary',
  disabled,
  fullWidth,
  loading,
  onClick,
  size,
  variant = 'contained',
}: ButtonProps) => {
  const classnames = classNames(
    'Button',
    variant && variant,
    color && color,
    disabled && 'disabled',
    fullWidth && 'fullWidth',
    loading && 'loading',
    size && `size-${size}`,
    className
  );
  // Event Handler
  const handleClick = React.useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const buttonMarkup = loading ? (
    <button className={classnames} disabled>
      <Spinner width={50} height={20} />
    </button>
  ) : (
    <button className={classnames} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );

  return buttonMarkup;
};
