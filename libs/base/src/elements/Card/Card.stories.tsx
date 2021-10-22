import React from 'react';
import { Card } from './Card';
import type { CardProps } from './Card';
import { ComponentMeta, Story } from '@storybook/react';

export default {
  title: 'Element/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default = () => {
  return (
    <div>
      <Card
        title="카드의 제목입니다."
        headerActions={[
          {
            content: 'Button1',
            onAction: () => alert('Clicked'),
          },
          {
            content: 'Button2',
          },
        ]}
      >
        <p>카드의 본문입니다.</p>
      </Card>
    </div>
  );
};
