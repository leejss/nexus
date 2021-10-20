import classNames from 'classnames';
import React from 'react';
import { ColorType, SizeType } from '../../types';
import './Input.scss';

export interface InputProps {
  className?: string;
  fullWidth?: boolean;
  placeholder?: string;
  caption?: React.ReactNode;
  value?: string;
  color?: ColorType;
}

export const Input = ({
  caption,
  fullWidth,
  placeholder,
  value,
  color,
}: InputProps) => {
  const classnames = classNames(
    'Input',
    fullWidth && 'fullWidth',
    color && color
  );
  const defaultMarkup = (
    <input className={classnames} placeholder={placeholder} value={value} />
  );
  const inputMarkup = caption ? (
    <div className="InputWrapper">
      <span>{caption}</span>
      {defaultMarkup}
    </div>
  ) : (
    defaultMarkup
  );
  return inputMarkup;
};
