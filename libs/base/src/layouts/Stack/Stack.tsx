import React from 'react';
import classNames from 'classnames';
import { css } from '@emotion/css';
import './Stack.scss';

export interface StackProps {
  gutter?: number;
  inline?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
  reverse?: boolean;
  between?: boolean;
  around?: boolean;
  center?: boolean;
}

export const Stack: React.FC<StackProps> = ({
  gutter,
  inline,
  children,
  horizontal,
  vertical,
  reverse,
  around,
  between,
  center,
}) => {
  const classnames = classNames(
    'Stack',
    inline && 'inline',
    horizontal && 'horizontal',
    vertical && 'vertical',
    reverse && 'reverse',
    around && 'around',
    between && 'between',
    center && 'center',
    gutter && `gutter-${gutter}`
  );
  return <div className={classnames}>{children}</div>;
};
