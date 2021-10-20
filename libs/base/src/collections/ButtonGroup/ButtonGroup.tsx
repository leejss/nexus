import React from 'react';
import { Stack } from '../../layouts/Stack';
import './ButtonGroup.scss';

export interface ButtonGroupProps {
  buttons: React.ReactNode[];
}

export const ButtonGroup = ({ buttons }: ButtonGroupProps) => {
  // 여기서 buttons를 받으면 unique 키를 부여한다.
  const buttonsMarkup = (
    <Stack horizontal gutter={3}>
      {buttons}
    </Stack>
  );
  return <div>{buttonsMarkup}</div>;
};
