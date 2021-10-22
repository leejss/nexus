import classNames from 'classnames';
import React from 'react';
import './Card.scss';
import { Button } from '../Button';
import { ButtonGroup } from '../../collections/ButtonGroup';
import { Stack } from '../../layouts/Stack';
import { Heading } from '../Heading/Heading';
import { ButtonVariantType } from '../../types';

export type CardAction = {
  content: string;
  disabled?: boolean;
  id?: string;
  onAction?(): void;
  onMouseEnter?(): void;
  accessibilityLabel?: string;
  type?: ButtonVariantType;
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
  // For Card Styling
  const classnames = classNames('Card');

  // 카드의 제목
  const titleMarkup = title ? (
    <header>
      <Heading element="h1">{title}</Heading>
    </header>
  ) : null;

  // 액션으로 부터 버튼을 생성한다.
  const buttons = headerActions?.map((c, i) => {
    const type = c.type ? c.type : 'text';
    return (
      <Button
        id={c.id}
        key={i}
        variant={type}
        onClick={c.onAction}
        disabled={c.disabled}
      >
        {c.content}
      </Button>
    );
  });

  // 헤더 액션 마크업을 생성한다.
  const headerActionsMarkup = buttons?.length ? (
    <div>
      <ButtonGroup buttons={buttons} />
    </div>
  ) : null;

  const footerMarkup = <footer></footer>;

  const bodyMarkup = (
    <div className={classnames}>
      <section>
        <Stack horizontal between>
          {titleMarkup}
          {headerActionsMarkup}
        </Stack>
        <div>{children}</div>
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
