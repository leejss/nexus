import React from 'react';
import { Card } from './Card';
import type { CardProps } from './Card';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Element/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default = () => {
  return (
    <div>
      <Card title="This is title">
        <p>This is Card</p>
      </Card>
    </div>
  );
};
