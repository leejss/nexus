import cx from 'classnames';
import React from 'react';
import { BorderStyleType, ColorType, SizeType } from '../../types';
import { css } from '@emotion/css';
import './Input.scss';

export type InputColorType = ColorType;
export type InputSizeType = SizeType;
export type InputBorderStyleType = {
  color?: string;
  width?: number;
  style?: BorderStyleType;
  radius?: string;
};

export interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  color?: InputColorType;
  border?: InputBorderStyleType;
  background?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input = ({
  placeholder,
  value,
  color,
  className,
  border = { radius: '5px', width: 2, style: 'solid' },
  background,
  leftIcon,
  rightIcon,
  onChange,
}: InputProps) => {
  const borderStyle = css`
    & {
      border-style: ${border?.style};
      border-width: ${border?.width}px;
      border-color: ${border?.color};
      border-radius: ${border?.radius};
    }
  `;
  const backgroundStyle = css`
    & {
      background-color: ${background};
    }
  `;
  const classnames = cx(
    'Input',
    color && color,
    className && className,
    border && borderStyle,
    background && backgroundStyle
  );

  const iconInput = (
    <div className="IconInputWrapper">
      {leftIcon && leftIcon}
      <input
        className="IconInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {rightIcon && rightIcon}
    </div>
  );

  if (leftIcon || rightIcon) {
    return iconInput;
  }
  return (
    <input
      className={classnames}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
