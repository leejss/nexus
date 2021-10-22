import React from 'react';
import { Heading } from './Heading';
import type { HeadingProps } from './Heading';
import { ComponentMeta, Story } from '@storybook/react';

export default {
  title: 'Element/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: Story<HeadingProps> = ({ center }) => {
  return (
    <div>
      <div>
        <Heading element="h1" weight="bold" center={center}>
          Typography
        </Heading>
        <Heading element="h2" weight="bold" center={center}>
          Typography
        </Heading>
        <Heading element="h3" weight="bold" center={center}>
          Typography
        </Heading>
        <Heading element="h4" weight="bold" center={center}>
          Typography
        </Heading>
        <Heading element="h5" weight="bold" center={center}>
          Typography
        </Heading>
        <Heading element="h6" weight="bold" center={center}>
          Typography
        </Heading>
      </div>

      <div>
        <Heading element="h1" weight="normal" center={center}>
          Typography
        </Heading>
        <Heading element="h2" weight="normal" center={center}>
          Typography
        </Heading>
        <Heading element="h3" weight="normal" center={center}>
          Typography
        </Heading>
        <Heading element="h4" weight="normal" center={center}>
          Typography
        </Heading>
        <Heading element="h5" weight="normal" center={center}>
          Typography
        </Heading>
        <Heading element="h6" weight="normal" center={center}>
          Typography
        </Heading>
      </div>

      <div>
        <Heading element="h1" weight="thin" center={center}>
          Typography
        </Heading>
        <Heading element="h2" weight="thin" center={center}>
          Typography
        </Heading>
        <Heading element="h3" weight="thin" center={center}>
          Typography
        </Heading>
        <Heading element="h4" weight="thin" center={center}>
          Typography
        </Heading>
        <Heading element="h5" weight="thin" center={center}>
          Typography
        </Heading>
        <Heading element="h6" weight="thin" center={center}>
          Typography
        </Heading>
      </div>
    </div>
  );
};

export const Types = Template.bind({});
Types.args = {
  center: false,
};
