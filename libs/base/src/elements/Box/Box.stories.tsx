import React from 'react';
import { Box } from './Box';
import type { BoxProps } from './Box';
import { ComponentMeta, Story, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/Box',
  component: Box,
  args: {
    size: {
      height: 100,
      width: 100,
    },
  },
} as ComponentMeta<typeof Box>;

const Template: Story<BoxProps> = (args) => <Box {...args} />;
export const Background = Template.bind({});
Background.args = {
  background: '#FF4040',
};
export const Border = Template.bind({});
Border.args = {
  border: {
    color: '#000',
    width: 20,
  },
};
export const onClick = Template.bind({});
onClick.args = {
  onClick: () => alert('Clicked'),
  border: {
    color: '#232',
  },
};

export const Hover = Template.bind({});
Hover.args = {
  width: 300,
  height: 300,
  border: {
    width: 5,
  },
  hover: {
    backgroundColor: '#29e0a9',
  },
};
