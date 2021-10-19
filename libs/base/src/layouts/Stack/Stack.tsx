import React from 'react';
import classNames from 'classnames';
import './Stack.scss';

export interface StackProps {
  gutter?: number;
}

export const Stack: React.FC<StackProps> = ({ gutter, children }) => {
  const classnames = classNames('Stack', gutter && `gutter-${gutter}`);
  return <div className={classnames}>{children}</div>;
};
