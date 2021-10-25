import React from 'react';
import { Stack } from '../../layouts/Stack';
import './ButtonGroup.scss';

export interface ButtonGroupProps {
  buttons?: React.ReactNode[] | null;
}

export const ButtonGroup = ({ buttons }: ButtonGroupProps) => {
  const buttonsMarkup = buttons?.length ? (
    <Stack horizontal gutter={3}>
      {buttons}
    </Stack>
  ) : null;
  return buttonsMarkup;
};
