import React from 'react';
import { Input } from './Input';
import type { InputProps } from './Input';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack } from '../../layouts/Stack';

export default {
  title: 'Element/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = () => {
  return (
    <div>
      <Stack gutter={3} inline vertical>
        <Input color="primary" />
        <Input color="secondary" />
        <Input color="error" />
      </Stack>
    </div>
  );
};

export const FullWidth: ComponentStory<typeof Input> = () => {
  return (
    <div>
      <Input fullWidth />
    </div>
  );
};

export const Caption: ComponentStory<typeof Input> = () => {
  return (
    <div>
      <Input caption="이름을 입력하세요." />
    </div>
  );
};

export const Placeholder: ComponentStory<typeof Input> = () => {
  return (
    <div>
      <Input placeholder="이름을 입력하세요." />
    </div>
  );
};
