import React from 'react';
import { ReactComponent as SVGSearch } from '../../../public/svgs/search.svg';
import { ReactComponent as SVGClose } from '../../../public/svgs/close.svg';
import './Icon.scss';

export type IconName = 'search' | 'close';

export interface IconProps {
  name?: IconName;
  onClick?(): void;
}

const Icon = ({ name, onClick }: IconProps) => {
  switch (name) {
    case 'close':
      return <SVGClose className="Icon" onClick={onClick} />;
    case 'search':
      return <SVGSearch className="Icon" onClick={onClick} />;
    default:
      return null;
  }
};

export default Icon;
