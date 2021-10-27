import React from 'react';
import './RadiouButtonGroup.scss';

export type Option = {
  text: string;
};

export interface RadioButttonGroupProps {
  options: Option[];
}

export const RadioButtonGroup = ({ options }: RadioButttonGroupProps) => {
  return <div></div>;
};
