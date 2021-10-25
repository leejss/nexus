import cx from 'classnames';
import React from 'react';
import './Card.scss';
import { ButtonGroup } from '../ButtonGroup';
import { Heading } from '../../elements/Heading/Heading';
import type { AlignType } from '../../types';
import type {
  BoxBackgroundType,
  BoxBorderType,
  BoxSizeType,
} from '../../elements/Box';
import { Box } from '../../elements/Box';
import { Stack } from '../../layouts/Stack';

export type CardActionType = {
  buttons: React.ReactNode[];
  align: AlignType;
};

export type CardBorderType = BoxBorderType;
export type CardBackgroundType = BoxBackgroundType;
export type CardSizeType = BoxSizeType;

export interface CardProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  border?: CardBorderType;
  background?: CardBackgroundType;
  header?: Partial<{ title?: string } & CardActionType>;
  footer?: Partial<{ text?: string } & CardActionType>;
  size?: CardSizeType;
  inline?: boolean;
  onClick?(): void;
}

export const Card = ({
  children,
  background = {
    shadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
  },
  border,
  footer,
  header,
  height,
  width,
  size,
  inline,
  onClick,
}: CardProps) => {
  const classnames = cx('Card', inline && 'inline');
  const headerMarkup = header && (
    <header>
      <div className="header">
        {header.title && <Heading element="h1">{header.title}</Heading>}
        <ButtonGroup buttons={header?.buttons} />
      </div>
    </header>
  );
  const footerMarkup = footer && (
    <footer>
      <div className="footer">
        <span>{footer.text}</span>
        <ButtonGroup buttons={footer?.buttons} />
      </div>
    </footer>
  );
  return (
    <Box
      border={border}
      background={background}
      size={size}
      className={classnames}
      height={height}
      width={width}
      onClick={onClick}
    >
      <section>
        <Stack vertical gutter={10}>
          {headerMarkup}
          {children}
          {footerMarkup}
        </Stack>
      </section>
    </Box>
  );
};
