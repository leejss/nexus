import React from 'react';
import { Button } from './Button';
import type { ButtonProps } from './Button';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Element/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => {
  return <Button loading={true} />;
};
