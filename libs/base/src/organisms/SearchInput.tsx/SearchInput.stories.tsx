import React from 'react';
import { SearchInput } from './SearchInput';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Element/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

export const Basic = () => {
  return <SearchInput />;
};
