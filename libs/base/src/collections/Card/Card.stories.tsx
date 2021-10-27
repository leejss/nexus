import React from 'react';
import { Card } from './Card';
import type { CardProps } from './Card';
import { ComponentMeta } from '@storybook/react';
import { Button } from '../../elements';

export default {
  title: 'Collections/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default = () => {
  return (
    <Card
      header={{
        title: 'This is title',
        buttons: [
          <Button color="primary">Primary</Button>,
          <Button color="ok">Secondary</Button>,
        ],
      }}
      footer={{
        text: 'This is footer',
        buttons: [
          <Button color="primary">Primary</Button>,
          <Button color="ok">Primary</Button>,
        ],
      }}
    >
      <p>This is card body</p>
    </Card>
  );
};

export const Basic = () => {
  return (
    <Card
      inline
      background={{
        color: 'red',
      }}
    >
      <p>This is body</p>
    </Card>
  );
};
