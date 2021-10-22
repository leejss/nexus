import React from 'react';
import { Stack } from '../../layouts/Stack';
import './ButtonGroup.scss';

export interface ButtonGroupProps {
  buttons: React.ReactNode[] | null;
}

export const ButtonGroup = ({ buttons }: ButtonGroupProps) => {
  console.log(buttons);

  // 여기서 buttons를 받으면 unique 키를 부여한다.
  const buttonsMarkup = buttons?.length ? (
    <Stack horizontal gutter={3}>
      {buttons}
    </Stack>
  ) : null;
  return <div>{buttonsMarkup}</div>;
};
