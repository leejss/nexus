import React from 'react';
import { css, CSSObject } from '@emotion/css';
import cx from 'classnames';
import { BorderStyleType, PaddingType } from '../../types';
import './Box.scss';

export type BorderDirectionType = 'top' | 'left' | 'right' | 'bottom';
export type BoxBorderType = {
  color?: string;
  style?: BorderStyleType;
  direction?: BorderDirectionType | BorderDirectionType[];
  width?: number;
};

export type BoxSizeType = {
  width?: number;
  height?: number;
};

export type BoxBackgroundType =
  | string
  | {
      color?: string;
      shadow?: string;
    };

export interface BoxProps {
  className?: string;
  width?: number;
  height?: number;
  background?: BoxBackgroundType;
  padding?: PaddingType;
  responsive?: boolean;
  border?: BoxBorderType;
  size?: BoxSizeType;
  center?: boolean;
  hover?: CSSObject;
  onClick?(): void;
}

export const Box: React.FC<BoxProps> = ({
  background,
  border,
  children,
  className,
  height,
  padding,
  responsive,
  width,
  size,
  center,
  hover,
  onClick,
}) => {
  const hoverStyle = css({
    '&:hover': {
      ...hover,
    },
  });
  const borderStlye = css`
    & {
      border-color: ${border?.color ?? '#000'};
      border-width: ${border?.width ?? 1}px;
      border-style: ${border?.style ?? 'solid'};
    }
  `;
  const sizeStyle = css`
    & {
      width: ${size?.width}px;
      height: ${size?.height}px;
    }
  `;
  const paddingStyle =
    typeof padding === 'number'
      ? css`
          padding: ${padding}px;
        `
      : css`
          padding-top: ${padding?.top}px;
          padding-left: ${padding?.left}px;
          padding-right: ${padding?.right}px;
          padding-bottom: ${padding?.bottom}px;
        `;
  const backgrondStyle =
    typeof background === 'string'
      ? css`
          background-color: ${background};
        `
      : css`
          background-color: ${background?.color};
          box-shadow: ${background?.shadow};
        `;
  const classnames = cx(
    'Box',
    background && backgrondStyle,
    height && height,
    padding && paddingStyle,
    width && width,
    responsive && 'responsive',
    border && borderStlye,
    size && sizeStyle,
    center && 'center',
    hover && hoverStyle,
    className && className
  );
  return (
    <div className={classnames} onClick={onClick}>
      {children}
    </div>
  );
};
