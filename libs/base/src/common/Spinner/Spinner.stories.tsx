import React from 'react';
import { Spinner } from './Spinner';
import type { SpinnerProps } from './Spinner';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Element/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const MySpinner = () => {
  const SMALL = 24;
  const MEDIUM = 48;
  const LARGE = 72;
  return (
    <div>
      <section>
        <h1>Small Loading</h1>
        <div>
          <Spinner width={SMALL} height={SMALL} />
        </div>
      </section>
      <section>
        <h1>Medium Loading</h1>
        <div>
          <Spinner width={MEDIUM} height={MEDIUM} />
        </div>
      </section>
      <section>
        <h1>Large Loading</h1>
        <div>
          <Spinner width={LARGE} height={LARGE} />
        </div>
      </section>
    </div>
  );
};
