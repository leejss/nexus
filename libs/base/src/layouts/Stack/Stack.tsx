import React from 'react';
import cx from 'classnames';
import './Stack.scss';
import { JustifyType } from '../../types';
import { css } from '@emotion/css';

export interface StackProps {
  gutter?: number;
  inline?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
  reverse?: boolean;
  justify?: JustifyType;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export const Stack: React.FC<StackProps> = ({
  gutter,
  inline,
  children,
  horizontal,
  vertical,
  reverse,
  justify,
}) => {
  const gutterStlye = css`
    &.horizontal {
      > * {
        margin-left: ${gutter}px;
      }
      > *:fist-child {
        margin-left: 0px;
      }
    }

    &.vertical {
      > * {
        margin-bottom: ${gutter}px;
      }
      > *:last-child {
        margin-bottom: 0px;
      }
    }
  `;
  const classnames = cx(
    'Stack',
    inline && 'inline',
    horizontal && 'horizontal',
    vertical && 'vertical',
    reverse && 'reverse',
    justify && justify,
    gutter && gutterStlye
  );
  return <div className={classnames}>{children}</div>;
};
