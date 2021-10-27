import React from 'react';
import { css } from '@emotion/css';
import { ReactComponent as SVGCircle } from '../../../public/svgs/circle.svg';
import cx from 'classnames';

export type RadioSizeType = {
  width?: number;
  height?: number;
};

export type RadioBorderType = {
  color?: string;
  width?: number;
};

export type RadioInnerCircleType = {
  fill?: string;
  storke?: string;
};

export type RadioCheckedStyleType = {
  background?: string;
  border?: RadioBorderType;
  innerCircle?: RadioInnerCircleType;
};

export interface RadioCircleProps {
  backgrond?: string;
  border?: RadioBorderType;
  checked?: boolean;
  checkedStyle?: RadioCheckedStyleType;
  size?: RadioSizeType;
}

const defaultCheckedStyle: RadioCheckedStyleType = {
  border: { color: '#fc5c3f' },
  innerCircle: {
    fill: '#fc5c3f',
  },
};

export const RadioCircle = ({
  backgrond,
  size = { width: 20, height: 20 },
  border = { color: '#fc6c3f', width: 2 },
  checked,
  checkedStyle = defaultCheckedStyle,
}: RadioCircleProps) => {
  const backgroundStyle = css`
    & {
      background-color: ${backgrond};
    }
  `;
  const borderStyle = css`
    & {
      border-color: ${border?.color};
      border-width: ${border?.width};
      border-style: solid;
      border-radius: 100%;
      min-width: 0px;
      max-width: 100%;
    }
  `;
  const sizeStyle = css`
    & {
      width: ${size?.width}px;
      height: ${size?.height}px;
    }
  `;

  const radioCheckedStyle = css`
    & {
      border-color: ${checkedStyle?.border?.color};
      border-width: ${checkedStyle?.border?.width};
      background-color: ${checkedStyle?.background};

      svg circle {
        fill: ${checkedStyle?.innerCircle?.fill};
        stroke: ${checkedStyle?.innerCircle?.storke};
      }
    }
  `;

  const classnames = cx(
    'RadioCircle',
    backgrond && backgroundStyle,
    border && borderStyle,
    size && sizeStyle,
    checked && radioCheckedStyle
  );

  return <div className={classnames}>{checked && <SVGCircle />}</div>;
};
