import React from 'react';
import { Input } from './Input';
import type { InputProps } from './Input';
import { ComponentMeta } from '@storybook/react';
import { Stack } from '../../layouts/Stack';
import { RadioCircle } from '../../common/RadioCircle';
import Icon from '../../common/Icon/Icon';

export default {
  title: 'Element/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Basic = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const clear = () => {
    setValue('');
  };
  const search = () => {
    alert(`You searched: ${value}`);
  };
  return (
    <div
      style={{
        width: '280px',
      }}
    >
      <Input
        leftIcon={<Icon name="search" onClick={search} />}
        rightIcon={<Icon name="close" onClick={clear} />}
        placeholder="검색어를 입력하세요"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
