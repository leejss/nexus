import React from 'react';
import { SplitButton } from './SplitButton';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Element/SplitButton',
  component: SplitButton,
} as ComponentMeta<typeof SplitButton>;

export const Basic = () => {
  return <SplitButton />;
};
