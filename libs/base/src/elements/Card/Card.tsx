import classNames from 'classnames';
import React from 'react';
import './Card.scss';
import { Button } from '../Button';
import { ButtonGroup } from '../../collections/ButtonGroup';
import { Stack } from '../../layouts/Stack';

export type CardAction = {
  content: string;
  disabled?: boolean;
  id?: string;
  onAction?(): void;
  onMouseEnter?(): void;
  accessibilityLabel?: string;
};

export interface CardProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  headerActions?: CardAction[];
  footerActions?: CardAction[];
}

export const Card = ({
  children,
  headerActions,
  footerActions,
  title,
}: CardProps) => {
  const classnames = classNames('Card');
  const titleMarkup = title ? (
    <header>
      <h1>{title}</h1>
    </header>
  ) : null;

  const bodyMarkup = (
    <div className={classnames}>
      <section>
        <Stack horizontal between>
          {titleMarkup}
          <div>
            <ButtonGroup
              buttons={[
                <Button variant="text">Button</Button>,
                <Button variant="text">Button</Button>,
              ]}
            />
          </div>
        </Stack>
        <div>
          <p>This is Body</p>
        </div>
        <footer>
          <Stack horizontal reverse between>
            <ButtonGroup
              buttons={[<Button>Button</Button>, <Button>Button</Button>]}
            />
          </Stack>
        </footer>
      </section>
    </div>
  );
  return bodyMarkup;
};
