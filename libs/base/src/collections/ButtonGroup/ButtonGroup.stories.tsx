import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import type { ButtonGroupProps } from './ButtonGroup';
import { ComponentMeta } from '@storybook/react';
import { Button } from '../../elements';

export default {
  title: 'Collections/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

export const Default = () => {
  return (
    <div>
      <ButtonGroup
        buttons={[
          <Button>This is button</Button>,
          <Button>This is button</Button>,
        ]}
      />
    </div>
  );
};
