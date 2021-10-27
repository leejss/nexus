import { css } from '@emotion/css';
import React from 'react';
import TableContext from './TableContext';
import cx from 'classnames';

export type TableCellBorderType = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

export type TableCellAlignType = 'left' | 'center' | 'right';

export interface TableCellProps {
  border?: TableCellBorderType;
  borderColor?: string;
  colSpan?: number;
  rowSpan?: number;
  align?: string;
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  border,
  borderColor,
  colSpan,
  rowSpan,
  align = 'center',
}) => {
  // header인가 body인가
  const tableContext = React.useContext(TableContext);
  const borderStyle = css`
    & {
      border-left: ${border?.left ?? 0}px;
      border-right: ${border?.right ?? 0}px;
      border-bottom: ${border?.bottom ?? 0}px;
      border-top: ${border?.top ?? 0}px;
      border-color: ${borderColor};
      border-style: solid;
    }
  `;
  const classnames = cx('TableCell', border && borderStyle, align && align);
  return (
    <td className={classnames} colSpan={colSpan} rowSpan={rowSpan}>
      {children}
    </td>
  );
};
