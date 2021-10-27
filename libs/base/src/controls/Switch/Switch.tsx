import React from 'react';
import './Switch.scss';

export interface SwitchProps {
  on?: boolean;
}

export const Switch = () => {
  return <input className="Switch" type="checkbox" role="switch" />;
};
