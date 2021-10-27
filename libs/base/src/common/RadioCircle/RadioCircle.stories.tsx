import React from 'react';
import { RadioCircle } from './RadioCircle';
import type { RadioCircleProps } from './RadioCircle';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Base/RadioCircle',
  component: RadioCircle,
} as ComponentMeta<typeof RadioCircle>;

export const Basic = () => {
  return (
    <div>
      <RadioCircle />
      <RadioCircle border={{ color: 'skyblue' }} />
      <RadioCircle
        border={{ color: 'skyblue' }}
        size={{
          width: 100,
          height: 100,
        }}
      />
      <RadioCircle checked />
    </div>
  );
};
