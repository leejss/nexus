import classNames from 'classnames';
import React from 'react';
import { FontWeight, HeadingTags } from '../../types';
import './Heading.scss';

export interface HeadingProps {
  children?: React.ReactNode;
  element: HeadingTags;
  center?: boolean;
  weight?: FontWeight;
}

export const Heading = ({
  element: Element,
  children,
  center,
  weight,
}: HeadingProps) => {
  const classnames = classNames(
    'Heading',
    weight && weight,
    center && 'center'
  );

  return <Element className={classnames}>{children}</Element>;
};
