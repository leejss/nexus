import React from 'react';
import './Spinner.scss';
import { ReactComponent as SpinnerSVG } from '../../../public/svgs/spinner.svg';

export interface SpinnerProps {
  width?: number;
  height?: number;
}

export const Spinner = ({ height, width }: SpinnerProps) => {
  return (
    <span className="Spinner">
      <SpinnerSVG width={width} height={height} />
    </span>
  );
};
